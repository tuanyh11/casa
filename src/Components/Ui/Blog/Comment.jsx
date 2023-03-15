import React from "react";
import CommentForm from "./CommentForm";

function Comment({
  author,
  replies,
  getDate,
  content,
  hasReplies,
  isLastComment,
  date,
  onSelectComment,
  isSelectComment,
  id,
  onCancel,
  onReply,
  onSubmitComment,
  valueComment,
}) {
  const authorAvatar = author?.node?.avatar?.url;

  const authorName = author?.node?.name;

  const createdAt = getDate(date);

  // console.log(replies);

  return (
    <ul>
      <li className="comment odd alt thread-odd thread-alt depth-1">
        <div
          className={`item-comment table-custom ${
            isLastComment ? "" : "mb-[30px]"
          }`}
        >
          <div className="comment-thumb vcard">
            <img
              alt=""
              src={authorAvatar}
              className=" rounded-full"
              height="122"
              width="122"
              loading="lazy"
              decoding="async"
            />{" "}
          </div>
          <div className="comment-info">
            <div className="author-date mb-[15px]">
              <cite className="fn">{authorName}</cite>{" "}
              <span className="navi cmt-date">{createdAt}</span>
            </div>
            <div
              className="desc-comment-text clearfix"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div
              className={`  mt-[15px] ${
                hasReplies ? " comment-time-reply" : ""
              }`}
            >
              {/* <Link
                  rel="nofollow"
                  className="comment-reply-login"
                  to={"/login"}
                >
                  Log in to Reply
                </Link>{" "} */}
              <button
                className="comment-reply-login transition-main hover:text-main"
                onClick={() => onSelectComment(id)}
              >
                Reply
              </button>{" "}
              {isSelectComment(id) && (
                <div className="mt-10">
                  <CommentForm
                    label="reply"
                    onSubmitComment={onSubmitComment}
                    nameUser={authorName}
                    onCancel={onCancel}
                    onReply={(value) => onReply(value, id)}
                    valueComment={valueComment}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pl-[130px]">
          {replies?.map((reply) => (
            <div key={reply?.id} className="mb-[30px] last:mb-0">
              <Comment
                {...reply}
                replies={[]}
                getDate={getDate}
                hasReplies={true}
                onSelectComment={onSelectComment}
                isSelectComment={isSelectComment}
                onCancel={onCancel}
                onReply={(value) => onReply(value, id)}
                onSubmitComment={onSubmitComment}
              />
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
}

export default Comment;
