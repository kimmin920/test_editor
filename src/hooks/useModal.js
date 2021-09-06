import { useState } from 'react';

function useModal(initialMode = false) {
  const [isModalOpen, setModalOpen] = useState(initialMode);

  function toggleModal() {
    setModalOpen((prev) => !prev);
  }

  return {
    isModalOpen,
    toggleModal,
    setModalOpen,
  };
}

export default useModal;
