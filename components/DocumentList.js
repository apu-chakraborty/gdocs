import Icon from "@material-tailwind/react/Icon"

function DocumentList({fileName, timestamp}) {
    return (
        <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
            <Icon name="article"
                size="3xl" color="blue" />
<p className="flex-grow pl-5 w-10 pr-10 truncate">
{fileName}

</p>

<p className="pr-5 text-sm">
{timestamp?.toDate().toLocaleDateString()}

</p>
        </div>
    )
}

export default DocumentList
