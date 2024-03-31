import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

function DocumentList({ fileName, timestamp, id, handleDelete }) {
  console.log(id, "id");

  const router = useRouter();
  return (
    <div
      className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
      //   onClick={() => router.push(`/doc/${id}`)}
    >
      <Icon name="article" size="3xl" color="blue" />
      <Link href={`/doc/${id}`}>
        <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      </Link>

      <p className="pr-5 text-sm">{timestamp?.toDate().toLocaleDateString()}</p>

      <Icon
        onClick={() => handleDelete(id)}
        name="delete"
        size="3xl"
        color="red"
      />
    </div>
  );
}

export default DocumentList;
