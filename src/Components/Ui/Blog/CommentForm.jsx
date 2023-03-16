import React from "react";

function CommentForm({
  nameUser,
  onCancel,
  label = "comment",
  onReply,
  onSubmitComment,
  valueComment
}) {
  console.log(valueComment);

  return (
    <div>
      {!nameUser ? (
        <h2 className=" uppercase font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
          LEAVE A {label}
        </h2>
      ) : (
        <div className="flex items-center font-poppins text-dark-color mb-[45px]">
          <h3 className="mb-[5px] text-[24px] uppercase font-semibold">
            Reply to {nameUser}
          </h3>
          <button onClick={() => onCancel()} className=" text-[19px] ml-[5px] ">
            Cancel Reply
          </button>
        </div>
      )}
      <form action="" className="comment-form">
        <textarea
          cols={45}
          rows={8}
          maxLength={65525}
          placeholder="Comment"
          required={true}
          onChange={(e) => onReply(e.target.value)}
          className="px-[15px] py-[10px] w-full border border-solid outline-none"
          value={valueComment}
        ></textarea>

        <div className="my-4">
          <button onClick={() => onSubmitComment()} type="button" className="button ">
            {label}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
