const Divider = ({ width }: { width: number }) => {
  return (
    <div
      style={{ width: `${width}%` }}
      className={"m-auto my-2 border-t border-solid bg-slate-600"}
    />
  );
};

export default Divider;
