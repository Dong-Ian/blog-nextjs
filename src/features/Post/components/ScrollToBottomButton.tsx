"use client";

import Button from "@/components/atoms/Button";

const ScrollToBottomButton = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <Button.Default
      type="button"
      className="fixed bottom-6 z-50 flex size-[60px] items-center justify-center rounded-full bg-white shadow-md"
      onClick={handleScrollToBottom}
    >
      <i className="bi bi-arrow-down text-[28px]"></i>
    </Button.Default>
  );
};

export default ScrollToBottomButton;
