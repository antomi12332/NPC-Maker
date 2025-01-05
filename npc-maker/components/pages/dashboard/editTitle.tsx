import { MdEdit } from "react-icons/md";

export default function EditTitle({
  projectTitle,
  isEditing,
  handleEditProjectName,
  handleTitleChange,
  handleTitleKeyDown,
  handleTitleSave }) {
  return (
    <div className="w-full h-full pt-20 bg-white flex-row justify-center items-center place-items-center inline-flex">
      <div className="self-stretch text-black text-[40px] font-bold leading-[48px] px-2">
        {/* project title */}
        {isEditing ? (
          <input
            type="text"
            value={projectTitle}
            onChange={handleTitleChange}
            onKeyDown={handleTitleKeyDown}
            onBlur={handleTitleSave}
            className="text-[40px] font-bold leading-[48px] px-2"
          />
        ) : (
          projectTitle
        )}
      </div>
      <MdEdit className="w-auto h-auto text-2xl" onClick={handleEditProjectName} />
    </div>
  );
}