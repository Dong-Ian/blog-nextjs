"use client";
import { useCallback, useState } from "react";

const useModal = (initialState = false) => {
  const [modal, setModalState] = useState(initialState);

  const openModal = useCallback(() => setModalState(true), []);
  const closeModal = useCallback(() => setModalState(false), []);
  const toggleModal = useCallback(() => setModalState((prev) => !prev), []);

  return { modal, openModal, closeModal, toggleModal };
};

export default useModal;
