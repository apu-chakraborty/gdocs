import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import debounce from "lodash/debounce";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import firebase from "firebase";

// Imported dynamically as this lib only available on browser and depends on windows obj, therefore dynamically loaded it with ssr false i.e this lib not imported during server side rendering
const Editor = dynamic(
	async () => {
		const { Editor } = await import("react-draft-wysiwyg");
		return Editor;
	},
	{
		ssr: false,
	}
);

const TextEditor = ({ user, id, state }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [loading, setLoading] = useState(false)
	useEffect(() =>  {
		setTimeout(() => setLoading(true), 3000)
		if (state?.editorState) {
			// const parsedEditorState = JSON.parse(state?.editorState)
			// console.log(state?.editorState, "parsedEditorState")
			let content = convertFromRaw(state?.editorState)
			let myeditor = EditorState.createWithContent(content)
			setEditorState(myeditor)
			console.log(myeditor, "editor state")
			setLoading(false)
		}
	}, [state?.editorState]);





	const handleEditorStateChange = editorState => {
		setEditorState(editorState);
		// editDocInDb(editorState);
		console.log(editorState.getCurrentContent(), "sdfsdf")
		let content = convertToRaw(editorState.getCurrentContent());

		db.collection("userDocs").doc(user?.email).collection("docs").doc(id).set({
			editorState: content,
			lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
		}, {
			merge: true,
		})
	};


	return (
		<div className="bg-[#F8F9FA] min-h-screen pb-16">
			{/* {JSON.stringify(editorState)} */}
			{
				loading ? <Editor
				editorState={editorState}
				onEditorStateChange={handleEditorStateChange}
				toolbarClassName="sticky top-0 !justify-center"
				editorClassName="bg-white mt-6 shadow-lg w-3/4 lg:w-3/5 mx-auto p-10 border mb-10 min-h-screen"

			/> : ""
			}

		</div>
	);
};

export default TextEditor;