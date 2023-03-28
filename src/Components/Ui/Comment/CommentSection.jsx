import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../Blog/Comment";
import CommentForm from "../Blog/CommentForm";

function CommentSection({
  commentCount = 1,
  comments,
  getDate,
  author,
  id,
  refetch,
  apiFunction = () => {},
}) {
  const [selectComment, setSelectComment] = useState(null);

  const [commentData, setCommentData] = useState({});

  const { mutate } = useMutation(apiFunction, {
    onSuccess: () => {
      refetch();
      setSelectComment(null);
      setCommentData({
        content: "",
      });
    },
  });

  console.log(commentData);
  console.log(selectComment);

  return (
    <div>
      <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
        {commentCount &&
          (Number(commentCount) > 1
            ? `${commentCount} COMMENTS`
            : `${commentCount} COMMENT`)}
      </h2>

      <div>
        {comments?.map((comment, index) => (
          <div key={comment?.commentId}>
            <Comment
              {...comment}
              replies={comment?.replies?.nodes}
              getDate={getDate}
              hasReplies={comment?.replies}
              isLastComment={comment.length - 1 === index}
              onSelectComment={(id) => {
                setSelectComment(id);
                setCommentData({ ...commentData, content: "" });
              }}
              isSelectComment={(id) => id === selectComment}
              onCancel={() => setSelectComment(null)}
              onReply={(content, parentId) =>
                setCommentData({
                  author,
                  parentId: parentId || null,
                  id,
                  content,
                })
              }
              onSubmitComment={() => mutate(commentData)}
              valueComment={commentData?.content}
            />
          </div>
        ))}
      </div>

      <div className="mt-[90px]">
        <div>
          <CommentForm
            onReply={(content) =>
              setCommentData({
                author,
                parentId:  null,
                id,
                content,
              })
            }
            onSubmitComment={() => mutate(commentData)}
            valueComment={commentData?.content}
          />
        </div>

        <div>
          <p className=" mt-[13px] text-gray-#999 mb-[43px]">
            You must be{" "}
            <Link to="/login" className=" text-black-#222222">
              logged in
            </Link>{" "}
            to post a comment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
