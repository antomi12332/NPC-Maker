import { MdEdit } from "react-icons/md";

export default function EditDisplayName({
  displayName,
  isEditing,
  handleEditDisplayName,
  handleDisplayNameChange,
  handleDisplayNameSave
}) {
  return (
    <div className="inline-flex">
      {isEditing ? (<input
        type="text"
        defaultValue={displayName}
        onChange={handleDisplayNameChange}
        onKeyDown={(e) => { if (e.key === "Enter") handleDisplayNameSave(); }}
        onBlur={handleDisplayNameSave}
        className="self-stretch text-black text-2xl font-bold leading-loose px-2"
      />) : (
        <div className="self-stretch text-black text-2xl font-bold leading-loose px-2">{displayName ? displayName : "Display Name"}</div>
      )}
      <MdEdit className="w-auto h-auto text-2xl" onClick={handleEditDisplayName} />
    </div>
  );
}