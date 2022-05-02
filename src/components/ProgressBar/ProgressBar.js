import React, { useState, useEffect } from "react";

const ProgressBar = (props) => {
  //todo 1:

  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props;

  //todo 3:
  const center = size / 2;

  //todo 4:
  const radius = size / 2 - strokeWidth / 2;

  //todo 5:
  const circumference = 2 * Math.PI * radius;

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
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        ></circle>
      </svg>
    </div>
  );
};

export default ProgressBar;
