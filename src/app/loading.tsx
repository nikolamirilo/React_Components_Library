"use client";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="loader">
      <Triangle visible={true} height="120" width="120" ariaLabel="triangle-loading" color="#ffff" />
    </div>
  );
}
