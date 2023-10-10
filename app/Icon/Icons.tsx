import React from "react";
import { PropsLikeButton } from "../types/interfaces";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 218 234"
      xmlSpace="preserve"
      className="w-10 fill-transparent grayscale"
    >
      <path
        d="M1 45V1.016c72.624-.005 145.248-.005 217.936-.005v233.868H1c0-59.9 0-119.92.39-180.666.79.29 1.48 1.289 1.545 2.325A3252.342 3252.342 0 015.1 95.382c.299 2.137.663 3.886.961 5.96-.017.758.033 1.194.02 2.089.313 5.488.69 10.516 1.002 15.996.318 5.49.7 10.53 1.01 16.023.31 6.483.691 12.515 1 18.974.241 3.137.774 5.843.829 8.558.157 7.763 3.101 11.374 11.052 13.485 8.664 6.093 17.304 11.827 26.027 17.805.38.36.679.475 1.217.676.407.119.573.15.913.479 8.397 5.422 16.62 10.548 24.985 15.987a1520.973 1520.973 0 0029.416 19.467c.976.63 2.365.623 3.93.987 1.133-.114 2.003-.133 2.654-.52 15.811-9.389 31.544-18.911 47.407-28.212 16.268-9.538 32.678-18.837 48.96-28.353 1.12-.654 2.32-2.195 2.421-3.412 1.471-17.644 2.844-35.298 4.057-52.962.554-8.06.667-16.15 1.056-24.224.268-5.584.666-11.162 1.006-16.742.599-9.826 1.197-19.651 1.869-29.87-.595-1.312-1.064-2.695-1.96-3.078A2719.198 2719.198 0 00178.9 29.408c-14.502-5.95-29.06-11.769-43.568-17.707-5.292-2.166-10.383-4.91-15.804-6.642-3.896-1.245-8.411-2.337-12.25-1.548-5.723 1.175-11.073 4.119-16.615 6.222C66.677 18.836 42.64 27.81 18.712 37.06c-5.69 2.199-11.04 5.28-16.84 8.226-.488.085-.68-.1-.872-.285z"
        opacity="1"
      ></path>
      <path
        fill="#9F92CA"
        d="M5.167 94.995c-.73-12.82-1.435-25.641-2.232-38.457-.065-1.036-.756-2.034-1.545-2.794C1 51.3 1 48.6 1 45.45c.192-.265.384-.08 1.22-.115 9.406 4.308 18.169 8.836 26.75 13.697-1.046 1.53-2.09 2.64-2.747 3.944-3.843 7.625-7.288 15.471-11.505 22.88-2.161 3.798-4.054 8.542-9.551 9.14z"
        opacity="1"
      ></path>
      <path
        fill="#BFB5DF"
        d="M216.82 47.966l-1.796 29.477c-.34 5.58-.738 11.158-1.006 16.742-.389 8.073-.502 16.163-1.056 24.224-1.213 17.664-2.586 35.318-4.057 52.962-.102 1.217-1.302 2.758-2.421 3.412-16.282 9.516-32.692 18.815-48.96 28.353-15.863 9.301-31.596 18.823-47.407 28.212-.65.387-1.52.406-2.682.065-.516-15.155-.638-29.78-.69-44.868.024-19.83-.02-39.195.002-59.023.071-10.102.075-19.74.443-29.472 30.987-14.31 61.596-28.56 92.247-42.72 5.71-2.638 11.584-4.918 17.383-7.364z"
        opacity="1"
      ></path>
      <path
        fill="#DAD5EF"
        d="M216.893 47.573c-5.872 2.839-11.747 5.119-17.456 7.757-30.65 14.16-61.26 28.41-92.553 42.555-7.416-3.322-14.162-6.571-21.137-10.075-6.347-3.235-12.465-6.215-18.807-9.434-5.46-2.966-10.695-5.694-16.163-8.668-3.405-1.776-6.577-3.306-10-5.068-4.043-2.135-7.834-4.038-11.625-5.94-8.763-4.529-17.526-9.057-26.637-13.636 5.157-2.725 10.507-5.806 16.197-8.005 23.93-9.25 47.965-18.223 71.952-27.326 5.542-2.103 10.892-5.047 16.615-6.222 3.839-.789 8.354.303 12.25 1.548 5.421 1.732 10.512 4.476 15.804 6.642 14.508 5.938 29.066 11.756 43.568 17.707a2719.198 2719.198 0 0136.031 15.087c.897.383 1.366 1.766 1.96 3.078z"
        opacity="1"
      ></path>
      <path
        fill="#8E81BC"
        d="M85.976 88.064c6.746 3.25 13.492 6.5 20.544 9.913.302 9.804.298 19.443-.09 29.418-1.576-3.688-2.766-7.711-4.29-12.862-.982 2.292-1.54 3.422-1.959 4.602-2.528 7.126-4.701 14.398-7.615 21.361-3.321 7.936-6.541 16.086-11.184 23.249-5.163 7.964-11.98 14.842-17.881 22.347-3.409 4.334-7.104 7.714-13.105 7.3-.437-.03-.956 1.131-1.437 1.738-.167-.031-.333-.063-.887-.356-.606-.48-.862-.642-1.153-.747-8.64-5.733-17.28-11.467-25.641-17.816 4.047-1.687 8.29-2.003 11.471-4.006 4.674-2.944 8.59-7.092 12.826-10.731 2.172-1.867 4.834-3.396 6.421-5.672 7.295-10.463 15.006-20.726 19.455-32.866 2.313-6.31 4.69-12.628 6.445-19.103 1.601-5.906 2.783-11.836 8.08-15.769z"
        opacity="1"
      ></path>
      <path
        fill="#9385C0"
        d="M85.747 87.81c-5.068 4.187-6.25 10.117-7.85 16.023-1.756 6.475-4.133 12.792-6.446 19.103-4.449 12.14-12.16 22.403-19.455 32.866-1.587 2.276-4.249 3.805-6.421 5.672-4.236 3.639-8.152 7.787-12.826 10.73-3.18 2.004-7.424 2.32-11.495 3.647-8.23-1.495-11.174-5.106-11.331-12.869-.055-2.715-.588-5.42-.447-8.579 9.87-1.566 16.98-6.971 23.425-13.272 3.549-3.47 6.444-7.61 9.62-11.458 6.257-7.578 9.68-16.603 13.626-25.46 3.783-8.49 4.128-18.476 11.016-25.6 6.119 2.982 12.237 5.962 18.584 9.197z"
        opacity="1"
      ></path>
      <path
        fill="#8A7CB9"
        d="M49.132 195.427c.308-.904.827-2.065 1.264-2.035 6 .414 9.696-2.966 13.105-7.3 5.901-7.505 12.718-14.383 17.88-22.347 4.644-7.163 7.864-15.313 11.185-23.249 2.914-6.963 5.087-14.235 7.615-21.361.419-1.18.977-2.31 1.959-4.602 1.524 5.15 2.714 9.174 4.222 13.325.362 19.492.407 38.858.037 58.645-1.783-2.32-3.151-5.06-4.914-8.593-1.742 2.954-3.068 5.549-4.72 7.917-2.036 2.921-4.35 5.649-6.53 8.47-1.69 2.185-3.99 4.154-4.901 6.63-1.67 4.54-4.388 7.218-9.137 8.083-.84.153-1.485 1.368-2.22 2.092-8.224-5.127-16.448-10.253-24.845-15.675z"
        opacity="1"
      ></path>
      <path
        fill="#9689C3"
        d="M66.94 78.376c-6.665 7.36-7.01 17.347-10.793 25.836-3.947 8.858-7.369 17.883-13.625 25.461-3.177 3.848-6.072 7.989-9.62 11.458-6.445 6.3-13.556 11.706-23.353 12.845-.764-6.011-1.145-12.043-1.118-18.59.725-.62 1.1-.648 1.348-.841 10.97-8.58 21.568-17.297 26.745-31.08 4.274-11.379 9.617-22.356 14.486-33.51 5.235 2.727 10.47 5.455 15.93 8.42z"
        opacity="1"
      ></path>
      <path
        fill="#998BC5"
        d="M50.777 69.708c-4.636 11.401-9.98 22.378-14.253 33.757-5.177 13.783-15.775 22.5-26.745 31.08-.247.193-.623.22-1.275.39-.72-4.978-1.102-10.017-1.113-15.66 5.53-6.006 11.964-10.68 15.573-16.973 6.874-11.988 12.134-24.901 18.064-37.43 3.172 1.53 6.344 3.06 9.75 4.836z"
        opacity="1"
      ></path>
      <path
        fill="#8779B5"
        d="M74.117 211.414c.595-1.036 1.24-2.25 2.08-2.404 4.749-.865 7.467-3.543 9.137-8.083.91-2.476 3.211-4.445 4.9-6.63 2.182-2.821 4.495-5.549 6.532-8.47 1.65-2.368 2.977-4.963 4.719-7.917 1.763 3.533 3.131 6.274 4.844 9.057.468 14.667.59 29.291.74 44.37-1.17.167-2.56.175-3.536-.456a1520.973 1520.973 0 01-29.416-19.467z"
        opacity="1"
      ></path>
      <path
        fill="#9B8EC6"
        d="M40.777 64.64c-5.679 12.76-10.939 25.674-17.813 37.662-3.609 6.294-10.044 10.967-15.51 16.522-.683-4.877-1.059-9.905-1.21-15.561.11-1.167-.002-1.706-.116-2.246-.364-1.749-.728-3.498-1.027-5.635 5.563-.984 7.456-5.728 9.617-9.526 4.217-7.409 7.662-15.255 11.505-22.88.657-1.304 1.701-2.413 2.748-3.944 3.972 1.57 7.763 3.473 11.806 5.608z"
        opacity="1"
      ></path>
      <path
        fill="#9F92CA"
        d="M6.062 101.341c.18.216.293.755.244 1.462-.211-.267-.26-.703-.244-1.462z"
        opacity="1"
      ></path>
      <path
        fill="#8A7CB9"
        d="M47.002 194.272c.208-.14.464.022.83.415-.151.06-.45-.055-.83-.415z"
        opacity="1"
      ></path>
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      viewBox="0 0 448 512"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  );
};

export const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      viewBox="0 0 448 512"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm154 239.7L64.2 172.4C66 156.4 79.5 144 96 144h256c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"></path>
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      viewBox="0 0 448 512"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
  );
};

export const TwitterBadge = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <path
        fill="#1d9bf0"
        d="M20.396 11a3.487 3.487 0 00-2.008-3.062 3.474 3.474 0 00-.742-3.584 3.474 3.474 0 00-3.584-.742A3.468 3.468 0 0011 1.604a3.463 3.463 0 00-3.053 2.008 3.472 3.472 0 00-1.902-.14c-.635.13-1.22.436-1.69.882a3.461 3.461 0 00-.734 3.584A3.49 3.49 0 001.604 11a3.496 3.496 0 002.017 3.062 3.471 3.471 0 00.733 3.584 3.49 3.49 0 003.584.742A3.487 3.487 0 0011 20.396a3.476 3.476 0 003.062-2.007 3.335 3.335 0 004.326-4.327A3.487 3.487 0 0020.396 11zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
      ></path>
    </svg>
  );
};

export const IconLike = (props:PropsLikeButton) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke=""
      className={`w-7 h-7 cursor-pointer hover:fill-red-500 ${props.like?' fill-red-500 ':'fill-gray-100'} ${props.state?'animate-jump animate-once':''}`}
      id="icon-like"
      onClick={props.onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
};

export const IconThumbsUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      />
    </svg>
  );
};
