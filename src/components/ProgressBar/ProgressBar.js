import React, { useState, useEffect } from "react";

const ProgressBar = (props) => {
  //todo 7: using the states

  const [offset, setOffset] = useState(0);

  //todo 1:

  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;

  //todo 3:
  const center = size / 2;

  //todo 4:
  const radius = size / 2 - strokeWidth / 2;

  //todo 5:
  const circumference = 2 * Math.PI * radius;

  //todo8: using the useEffect. Passing the dependencies because they are defined outside of this function. we are passing also the offset because we need to update it immediately and have the latest value, if we are not going is going to return the default value that is 0. Once its updated it will updated to the new value as well.

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  //todo 2:(we have input the atribute after step 3)
  return (
    <div>
      <svg width={size} height={size} className='circular-chart'>
        <circle
          className='circular-bg stroke={circleOneStroke}'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className='circle'
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          //todo 6: Now we create the states Hooks in order to make the changes in order to get the updated values. we have to use the useEffect in order to change and get the value to the props and then use that value here.
          strokeDasharray={circumference}
          strokeDashoffset={offset} //!the progress is empty we get pass the offset from the hook
        ></circle>

        <text x={center} y={center} className='percentange'>
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
