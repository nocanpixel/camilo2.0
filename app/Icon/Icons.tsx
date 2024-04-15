import React from "react";
import { PropsLikeButton, PropsLogos } from "../types/interfaces";

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

export const IconLike = (props: PropsLikeButton) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke=""
      className={`w-7 h-7 cursor-pointer hover:fill-red-500 ${props.like ? " fill-red-500 " : "fill-gray-100"
        } ${props.state ? "animate-jump animate-once" : ""}`}
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

export const IconPlus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3.1}
      stroke="currentColor"
      className="w-6 h-6 opacity-40 hidden group-hover:block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const IconMinus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={4}
      stroke="currentColor"
      className="w-6 h-6 opacity-40 hidden group-hover:block"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );
};

export const IconClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3.1}
      stroke="currentColor"
      className="w-6 h-6 opacity-40 hidden group-hover:block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const LogoJs: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={`${color || '#000'}`} transform="translate(-420 -7479)">
          <g transform="translate(56 160)">
            <path d="M379.328 7337.432c-1.745 0-2.873-.832-3.423-1.92l1.53-.886c.403.658.926 1.141 1.853 1.141.778 0 1.275-.389 1.275-.926 0-.808-1.078-1.124-1.839-1.45-1.356-.577-2.256-1.302-2.256-2.833 0-1.409 1.074-2.483 2.753-2.483 1.194 0 2.054.416 2.671 1.503l-1.463.94c-.322-.577-.671-.805-1.208-.805-.551 0-.9.349-.9.805 0 .564.349.792 1.155 1.141 1.689.724 2.967 1.293 2.967 3.155 0 1.692-1.329 2.618-3.115 2.618zm-4.328-2.833c0 1.947-1.199 2.976-2.864 2.976-1.504 0-2.405-.575-2.848-1.575h-.026l1.529-1.069c.295.523.561.894 1.205.894.618 0 1.004-.313 1.004-1.252V7328h2v6.599zM364 7339h20v-20h-20v20z"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export const LogoReact: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${color}`}
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <path d="M29.7 16c0-1.9-2.2-3.5-5.7-4.5.9-3.5.6-6.2-1-7.2-.4-.2-.8-.3-1.3-.3-1.5 0-3.5 1.1-5.5 3-2-1.9-3.9-3-5.5-3-.5 0-.9.1-1.3.3-1.5 1-1.8 3.7-1 7.2-3.4 1-5.7 2.7-5.7 4.5 0 1.9 2.2 3.5 5.7 4.5-.8 3.5-.5 6.3 1.1 7.2.4.2.8.3 1.3.3 1.5 0 3.5-1.1 5.5-3 2 1.9 3.9 3 5.5 3 .5 0 .9-.1 1.3-.3 1.6-.9 1.9-3.7 1.1-7.2 3.3-1 5.5-2.7 5.5-4.5zm-8-10.7c.3 0 .5 0 .6.2.8.4 1.1 2 .8 4.1-.1.5-.2 1.1-.3 1.6-1.1-.3-2.2-.4-3.5-.6-.7-1-1.4-1.9-2.2-2.7 1.8-1.7 3.5-2.6 4.6-2.6zm-1.8 12.8c-.4.7-.8 1.4-1.3 2-.8.1-1.6.1-2.4.1-.8 0-1.6 0-2.4-.1-.4-.6-.8-1.3-1.3-2-.4-.7-.8-1.4-1.1-2.1.3-.7.7-1.4 1.1-2.1.4-.7.9-1.4 1.3-2.1.8-.1 1.6-.1 2.4-.1.8 0 1.6 0 2.4.1.4.6.9 1.3 1.3 2.1.4.7.8 1.4 1.1 2.1-.3.7-.7 1.4-1.1 2.1zm1.8-.6c.3.7.5 1.4.7 2-.7.2-1.4.3-2.1.4.2-.4.5-.8.7-1.2.3-.3.5-.8.7-1.2zm-5.5 5.7c-.5-.5-1-1.1-1.4-1.7h2.8c-.4.6-.9 1.2-1.4 1.7zM12.1 20c-.7-.1-1.4-.2-2.1-.4.2-.7.5-1.4.7-2 .2.4.4.8.7 1.2.3.4.5.8.7 1.2zm-1.4-5.5c-.3-.7-.5-1.4-.8-2.1.7-.2 1.4-.3 2.2-.4-.3.4-.5.8-.8 1.2-.1.5-.3.9-.6 1.3zm5.5-5.7c.5.5.9 1.1 1.4 1.6h-2.8c.5-.5 1-1.1 1.4-1.6zm4.8 4.4c-.3-.4-.5-.8-.8-1.2.8.1 1.5.2 2.2.4-.2.7-.5 1.4-.8 2.1-.1-.4-.3-.8-.6-1.3zM9.4 9.5c-.3-2.1 0-3.6.8-4.1.2-.1.4-.2.6-.2 1.1 0 2.7.9 4.5 2.6-.7.8-1.5 1.7-2.2 2.7-1.2.1-2.4.3-3.5.6-.1-.5-.2-1.1-.2-1.6zm-2.2 9.2C5.3 17.9 4 16.8 4 16c0-.9 1.2-1.9 3.1-2.7.5-.2 1-.4 1.6-.5.3 1.1.7 2.2 1.3 3.3-.5 1.1-.9 2.2-1.2 3.2-.6-.2-1.1-.4-1.6-.6zm2.9 7.9c-.8-.4-1.1-2-.8-4.1.1-.5.2-1.1.3-1.7 1.1.2 2.2.4 3.4.5.7 1 1.5 1.9 2.2 2.7-1.8 1.7-3.4 2.6-4.5 2.6-.2.1-.4 0-.6 0zm13-4.1c.3 2.1 0 3.6-.8 4.1-.2.1-.4.2-.6.2-1.1 0-2.7-.9-4.5-2.6.8-.8 1.5-1.7 2.2-2.7 1.2-.1 2.4-.3 3.4-.5.1.4.2.9.3 1.5zm2.2-3.8c-.5.2-1 .4-1.6.5-.3-1-.7-2.1-1.2-3.2.5-1.1.9-2.2 1.3-3.3.5.2 1.1.3 1.6.5 1.9.8 3.1 1.8 3.1 2.7-.1.9-1.3 2-3.2 2.8z"></path>
      <path d="M16.3 18.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"></path>
    </svg>
  )
}


export const LogoGit: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M2.585 17.413a1.999 1.999 0 010-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413z"
      ></path>
      <path
        fill="#000"
        d="M12.149 5.062l-1.215 1.215 3.139 3.139A2.126 2.126 0 0015.25 12.3v7.679a2.126 2.126 0 101.718.097v-7.765l3 3a2.125 2.125 0 101.283-1.147l-3.221-3.223a2.125 2.125 0 00-2.66-2.66l-3.221-3.22z"
      ></path>
    </svg>
  )
}

export const LogoNode: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="-16.5 0 289 289"
    >
      <path
        fill={color}
        d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z"
      ></path>
    </svg>
  )
}


export const LogoSql: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.25 6c0-1.542 1.23-2.736 2.758-3.5C7.58 1.716 9.7 1.25 12 1.25s4.42.465 5.992 1.25c1.528.764 2.758 1.958 2.758 3.5v12c0 1.542-1.23 2.735-2.758 3.5-1.572.785-3.692 1.25-5.992 1.25s-4.42-.465-5.992-1.25C4.48 20.734 3.25 19.541 3.25 18V6zm1.5 0c0-.667.56-1.474 1.929-2.158C8.002 3.181 9.882 2.75 12 2.75s3.998.43 5.321 1.092C18.69 4.526 19.25 5.332 19.25 6c0 .667-.56 1.474-1.929 2.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092C5.31 7.474 4.75 6.668 4.75 6zm0 12c0 .667.56 1.474 1.929 2.158 1.323.661 3.203 1.092 5.321 1.092s3.998-.43 5.321-1.092c1.368-.684 1.929-1.49 1.929-2.158v-3.293c-.377.3-.804.565-1.258.792C16.42 16.285 14.3 16.75 12 16.75s-4.42-.465-5.992-1.25a7.146 7.146 0 01-1.258-.793V18zm14.5-9.293V12c0 .667-.56 1.474-1.929 2.158-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.31 13.474 4.75 12.668 4.75 12V8.707c.377.3.804.565 1.258.792C7.58 10.285 9.7 10.75 12 10.75s4.42-.465 5.992-1.25a7.144 7.144 0 001.258-.793z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const LogoRedux: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M21.787 21.556a2.114 2.114 0 001.909-2.177c-.039-1.126-.993-2.027-2.138-2.027h-.077a2.115 2.115 0 00-2.061 2.177c.038.563.267 1.051.61 1.389-1.297 2.515-3.283 4.354-6.26 5.893-2.024 1.05-4.123 1.426-6.223 1.163-1.718-.225-3.054-.976-3.894-2.214-1.222-1.84-1.336-3.829-.305-5.818.725-1.426 1.87-2.477 2.596-3.003a19.962 19.962 0 01-.497-1.914c-5.535 3.941-4.963 9.27-3.283 11.786 1.26 1.876 3.818 3.04 6.643 3.04.763 0 1.527-.075 2.29-.263 4.887-.938 8.59-3.79 10.69-8.032zm6.719-4.654c-2.901-3.34-7.177-5.18-12.064-5.18h-.61a2.102 2.102 0 00-1.871-1.126h-.077a2.115 2.115 0 00-2.061 2.177c.038 1.126.992 2.027 2.138 2.027h.076a2.15 2.15 0 001.87-1.276h.688c2.901 0 5.65.825 8.132 2.44 1.908 1.238 3.283 2.852 4.046 4.804.65 1.576.61 3.115-.076 4.429-1.07 1.989-2.863 3.077-5.23 3.077-1.527 0-2.978-.45-3.742-.788a22.52 22.52 0 01-1.718 1.351c1.642.751 3.322 1.164 4.925 1.164 3.665 0 6.376-1.99 7.406-3.979 1.107-2.177 1.031-5.93-1.832-9.12zM9.112 22.194c.039 1.126.993 2.027 2.138 2.027h.077a2.115 2.115 0 002.061-2.177c-.038-1.126-.993-2.027-2.138-2.027h-.076c-.076 0-.191 0-.267.037-1.566-2.552-2.215-5.33-1.985-8.332.152-2.252.916-4.204 2.252-5.818 1.107-1.388 3.245-2.064 4.696-2.101 4.046-.076 5.764 4.879 5.879 6.868.496.113 1.336.376 1.909.563-.459-6.08-4.276-9.233-7.941-9.233-3.436 0-6.605 2.44-7.865 6.043-1.756 4.804-.61 9.42 1.527 13.061-.19.263-.305.676-.267 1.089z"
      ></path>
    </svg>
  )
}

export const LogoStyledComponents: React.FC<PropsLogos> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path fill={color} d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261a1.4 1.4 0 00-.189.411c-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217v1.973l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"></path>
    </svg>
  )
}

export const HeroName = () => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 436 108"
    >
      <path
        fill="#fff"
        stroke='#fff'
        strokeWidth={1}
        d="M138.633 42c-3.48 0-6.16-.84-8.04-2.52-1.84-1.72-2.76-4.28-2.76-7.68V10.2c0-3.4.92-5.94 2.76-7.62 1.88-1.72 4.56-2.58 8.04-2.58h8.52v4.56h-9.12c-1.48 0-2.68.44-3.6 1.32-.92.88-1.38 1.94-1.38 3.18v23.88c0 1.24.46 2.3 1.38 3.18.92.88 2.12 1.32 3.6 1.32h9.12V42h-8.52zm39.482 0c-.52 0-1.1-.16-1.74-.48a4.91 4.91 0 01-1.56-1.32c-.92 1.2-2.14 1.8-3.66 1.8h-5.34c-3.04 0-5.26-.6-6.66-1.8-1.36-1.24-2.04-3.34-2.04-6.3v-1.2c0-6.2 2.92-9.3 8.76-9.3h7.44v-3c0-1.24-.38-2.2-1.14-2.88-.76-.68-1.88-1.02-3.36-1.02h-9.3V12h8.7c3.48 0 6.04.76 7.68 2.28 1.68 1.52 2.52 3.96 2.52 7.32V36c0 .6.22 1.06.66 1.38.48.28 1.26.42 2.34.42V42h-3.3zm-7.56-4.5c1.2 0 1.96-.28 2.28-.84.32-.56.48-1.28.48-2.16v-6.6h-7.5c-1.04 0-1.9.34-2.58 1.02-.68.68-1.02 1.54-1.02 2.58v3c0 1.04.24 1.8.72 2.28.48.48 1.24.72 2.28.72h5.34zM191.978 12v1.38c1.04-.92 2.28-1.38 3.72-1.38h.36c2.8 0 4.78.8 5.94 2.4 1.32-1.6 3.06-2.4 5.22-2.4h.36c2.44 0 4.24.62 5.4 1.86 1.16 1.24 1.74 3.44 1.74 6.6V42h-4.8V20.4c0-1.64-.18-2.78-.54-3.42-.32-.64-1.08-.96-2.28-.96h-.36c-1.2 0-2.04.42-2.52 1.26-.44.8-.68 1.7-.72 2.7V42h-4.8V20.4c0-1.68-.2-2.82-.6-3.42-.4-.64-1.12-.96-2.16-.96h-.36c-1.2 0-2.04.36-2.52 1.08-.48.68-.74 1.46-.78 2.34V42h-4.8V12h4.5zM235.72 0v5.4h-5.7V0h5.7zM221.5 16.5V12h13.92v25.5h8.88V42h-13.98V16.5h-8.82zM266.622 42c-1.36 0-2.56-.48-3.6-1.44-1-.96-1.5-2.48-1.5-4.56V4.5h-8.82V0h13.92v35.7c0 .64.16 1.1.48 1.38.32.28.86.42 1.62.42h7.98V42h-10.08zm41.043-9.6c0 3.36-.84 5.8-2.52 7.32-1.64 1.52-4.2 2.28-7.68 2.28h-1.98c-3.48 0-6.06-.76-7.74-2.28-1.64-1.52-2.46-3.96-2.46-7.32V21.6c0-3.36.82-5.8 2.46-7.32 1.68-1.52 4.26-2.28 7.74-2.28h1.98c3.48 0 6.04.76 7.68 2.28 1.68 1.52 2.52 3.96 2.52 7.32v10.8zm-5.1-12c0-1.24-.38-2.2-1.14-2.88-.76-.68-1.88-1.02-3.36-1.02h-3.18c-1.48 0-2.6.34-3.36 1.02-.76.68-1.14 1.64-1.14 2.88v13.2c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h3.18c1.48 0 2.6-.34 3.36-1.02.76-.68 1.14-1.64 1.14-2.88V20.4zM11.724 108c-3.48 0-6.16-.84-8.04-2.52-1.84-1.72-2.76-4.28-2.76-7.68V76.2c0-3.4.92-5.94 2.76-7.62 1.88-1.72 4.56-2.58 8.04-2.58h8.52v4.56h-9.12c-1.48 0-2.68.44-3.6 1.32-.92.88-1.38 1.94-1.38 3.18v23.88c0 1.24.46 2.3 1.38 3.18.92.88 2.12 1.32 3.6 1.32h9.12V108h-8.52zm39.482 0c-.52 0-1.1-.16-1.74-.48a4.91 4.91 0 01-1.56-1.32c-.92 1.2-2.14 1.8-3.66 1.8h-5.34c-3.04 0-5.26-.6-6.66-1.8-1.36-1.24-2.04-3.34-2.04-6.3v-1.2c0-6.2 2.92-9.3 8.76-9.3h7.44v-3c0-1.24-.38-2.2-1.14-2.88-.76-.68-1.88-1.02-3.36-1.02h-9.3V78h8.7c3.48 0 6.04.76 7.68 2.28 1.68 1.52 2.52 3.96 2.52 7.32V102c0 .6.22 1.06.66 1.38.48.28 1.26.42 2.34.42v4.2h-3.3zm-7.56-4.5c1.2 0 1.96-.28 2.28-.84.32-.56.48-1.28.48-2.16v-6.6h-7.5c-1.04 0-1.9.34-2.58 1.02-.68.68-1.02 1.54-1.02 2.58v3c0 1.04.24 1.8.72 2.28.48.48 1.24.72 2.28.72h5.34zm24.722 0v-21h-4.38V78h9.18v1.62c1.32-1.08 2.92-1.62 4.8-1.62h6.18v4.8h-6.78c-1.28 0-2.24.42-2.88 1.26-.64.8-.98 1.62-1.02 2.46v16.98h6.54v4.5h-16.02v-4.5h4.38zm31.803 0v-21h-4.38V78h9.18v1.62c1.32-1.08 2.92-1.62 4.8-1.62h6.18v4.8h-6.78c-1.28 0-2.24.42-2.88 1.26-.64.8-.98 1.62-1.02 2.46v16.98h6.54v4.5h-16.02v-4.5h4.38zm37.262 4.5c-3.52 0-6.1-.74-7.74-2.22-1.64-1.52-2.46-3.98-2.46-7.38V87.6c0-3.44.74-5.9 2.22-7.38 1.48-1.48 3.94-2.22 7.38-2.22h2.82c2.84 0 4.98.8 6.42 2.4 1.48 1.56 2.22 3.86 2.22 6.9v7.8h-15.96v4.5c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h9.54v4.5h-8.94zm5.88-21.9c0-1.04-.34-1.9-1.02-2.58-.68-.68-1.54-1.02-2.58-1.02h-3.48c-1.44 0-2.46.34-3.06 1.02-.56.64-.84 1.6-.84 2.88v4.2h10.98v-4.5zm18.302-18.12c.36-.2 1.1-.58 2.22-1.14 1.12-.56 1.92-.84 2.4-.84h.9c.32 0 .8.12 1.44.36.64.24 1.3.52 1.98.84 1.68.8 2.76 1.2 3.24 1.2h.6c.28 0 .92-.3 1.92-.9 1.04-.6 1.74-1.02 2.1-1.26v4.32c-.32.2-.98.58-1.98 1.14-.96.56-1.66.84-2.1.84h-.9c-.2 0-1.1-.34-2.7-1.02-2.08-.92-3.38-1.38-3.9-1.38h-.6c-.36 0-1.12.3-2.28.9-1.16.6-1.94 1.02-2.34 1.26v-4.32zm1.8 10.02v1.44c1.24-.96 2.84-1.44 4.8-1.44h2.76c3.24 0 5.64.76 7.2 2.28 1.6 1.52 2.4 3.96 2.4 7.32V108h-5.1V86.4c0-1.2-.36-2.14-1.08-2.82-.68-.72-1.62-1.08-2.82-1.08h-3.96c-1.32 0-2.3.36-2.94 1.08-.64.68-.96 1.42-.96 2.22V108h-5.1V78h4.8zm49.143 20.4c0 3.36-.84 5.8-2.52 7.32-1.64 1.52-4.2 2.28-7.68 2.28h-1.98c-3.48 0-6.06-.76-7.74-2.28-1.64-1.52-2.46-3.96-2.46-7.32V87.6c0-3.36.82-5.8 2.46-7.32 1.68-1.52 4.26-2.28 7.74-2.28h1.98c3.48 0 6.04.76 7.68 2.28 1.68 1.52 2.52 3.96 2.52 7.32v10.8zm-5.1-12c0-1.24-.38-2.2-1.14-2.88-.76-.68-1.88-1.02-3.36-1.02h-3.18c-1.48 0-2.6.34-3.36 1.02-.76.68-1.14 1.64-1.14 2.88v13.2c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h3.18c1.48 0 2.6-.34 3.36-1.02.76-.68 1.14-1.64 1.14-2.88V86.4zm68.644 12.12c0 3.44-.8 5.88-2.4 7.32-1.56 1.44-4.16 2.16-7.8 2.16h-12V66h11.28c3.56 0 6.16.72 7.8 2.16 1.68 1.44 2.52 3.84 2.52 7.2v3.42c0 3.08-1.1 5.4-3.3 6.96 2.6 1.44 3.9 3.9 3.9 7.38v5.4zm-5.82-23.7c0-1.52-.36-2.62-1.08-3.3-.68-.68-1.78-1.02-3.3-1.02h-6.78v13.26h6.78c1.24 0 2.28-.4 3.12-1.2.84-.8 1.26-1.86 1.26-3.18v-4.56zm.6 17.76c0-1.32-.4-2.36-1.2-3.12-.8-.8-1.86-1.2-3.18-1.2h-7.38v15.24h7.32c1.52 0 2.64-.34 3.36-1.02.72-.72 1.08-1.84 1.08-3.36v-6.54zM296.445 108c-3.52 0-6.1-.74-7.74-2.22-1.64-1.52-2.46-3.98-2.46-7.38V87.6c0-3.44.74-5.9 2.22-7.38 1.48-1.48 3.94-2.22 7.38-2.22h2.82c2.84 0 4.98.8 6.42 2.4 1.48 1.56 2.22 3.86 2.22 6.9v7.8h-15.96v4.5c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h9.54v4.5h-8.94zm5.88-21.9c0-1.04-.34-1.9-1.02-2.58-.68-.68-1.54-1.02-2.58-1.02h-3.48c-1.44 0-2.46.34-3.06 1.02-.56.64-.84 1.6-.84 2.88v4.2h10.98v-4.5zm28.202 21.9c-1.36 0-2.56-.48-3.6-1.44-1-.96-1.5-2.48-1.5-4.56V70.5h-8.82V66h13.92v35.7c0 .64.16 1.1.48 1.38.32.28.86.42 1.62.42h7.98v4.5h-10.08zm29.522 0c-3.52 0-6.1-.74-7.74-2.22-1.64-1.52-2.46-3.98-2.46-7.38V87.6c0-3.44.74-5.9 2.22-7.38 1.48-1.48 3.94-2.22 7.38-2.22h2.82c2.84 0 4.98.8 6.42 2.4 1.48 1.56 2.22 3.86 2.22 6.9v7.8h-15.96v4.5c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h9.54v4.5h-8.94zm5.88-21.9c0-1.04-.34-1.9-1.02-2.58-.68-.68-1.54-1.02-2.58-1.02h-3.48c-1.44 0-2.46.34-3.06 1.02-.56.64-.84 1.6-.84 2.88v4.2h10.98v-4.5zm18.303-18.12c.36-.2 1.1-.58 2.22-1.14 1.12-.56 1.92-.84 2.4-.84h.9c.32 0 .8.12 1.44.36.64.24 1.3.52 1.98.84 1.68.8 2.76 1.2 3.24 1.2h.6c.28 0 .92-.3 1.92-.9 1.04-.6 1.74-1.02 2.1-1.26v4.32c-.32.2-.98.58-1.98 1.14-.96.56-1.66.84-2.1.84h-.9c-.2 0-1.1-.34-2.7-1.02-2.08-.92-3.38-1.38-3.9-1.38h-.6c-.36 0-1.12.3-2.28.9-1.16.6-1.94 1.02-2.34 1.26v-4.32zm1.8 10.02v1.44c1.24-.96 2.84-1.44 4.8-1.44h2.76c3.24 0 5.64.76 7.2 2.28 1.6 1.52 2.4 3.96 2.4 7.32V108h-5.1V86.4c0-1.2-.36-2.14-1.08-2.82-.68-.72-1.62-1.08-2.82-1.08h-3.96c-1.32 0-2.3.36-2.94 1.08-.64.68-.96 1.42-.96 2.22V108h-5.1V78h4.8zm49.142 20.4c0 3.36-.84 5.8-2.52 7.32-1.64 1.52-4.2 2.28-7.68 2.28h-1.98c-3.48 0-6.06-.76-7.74-2.28-1.64-1.52-2.46-3.96-2.46-7.32V87.6c0-3.36.82-5.8 2.46-7.32 1.68-1.52 4.26-2.28 7.74-2.28h1.98c3.48 0 6.04.76 7.68 2.28 1.68 1.52 2.52 3.96 2.52 7.32v10.8zm-5.1-12c0-1.24-.38-2.2-1.14-2.88-.76-.68-1.88-1.02-3.36-1.02h-3.18c-1.48 0-2.6.34-3.36 1.02-.76.68-1.14 1.64-1.14 2.88v13.2c0 1.24.38 2.2 1.14 2.88.76.68 1.88 1.02 3.36 1.02h3.18c1.48 0 2.6-.34 3.36-1.02.76-.68 1.14-1.64 1.14-2.88V86.4z"
      ></path>
    </svg>
  )
}


export const GithubIcon: React.FC<PropsLogos> = ({color}) => {
  return (
    <svg className={`transition ease-in delay-100 ${!color? 'fill-slate-700': 'hover:fill-white fill-slate-300'} `} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      ></path>
    </svg>
  )
}