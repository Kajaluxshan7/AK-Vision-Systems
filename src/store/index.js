import { create } from "zustand";

// Loading state store
export const useLoadingStore = create((set) => ({
  isLoading: true,
  progress: 0,
  setLoading: (loading) => set({ isLoading: loading }),
  setProgress: (progress) => set({ progress }),
}));

// 3D Scene state store
export const useSceneStore = create((set) => ({
  activeCamera: null,
  isInteracting: false,
  cameraPosition: [0, 0, 5],
  cameraTarget: [0, 0, 0],
  setActiveCamera: (camera) => set({ activeCamera: camera }),
  setInteracting: (interacting) => set({ isInteracting: interacting }),
  setCameraPosition: (position) => set({ cameraPosition: position }),
  setCameraTarget: (target) => set({ cameraTarget: target }),
}));

// UI state store
export const useUIStore = create((set) => ({
  theme: "dark",
  reducedMotion: false,
  modalOpen: false,
  selectedProduct: null,
  animationsEnabled: true,
  setTheme: (theme) => set({ theme }),
  setReducedMotion: (reduced) => set({ reducedMotion: reduced }),
  setModalOpen: (open) => set({ modalOpen: open }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setAnimationsEnabled: (enabled) => set({ animationsEnabled: enabled }),
}));

// Form state store
export const useFormStore = create((set) => ({
  contactForm: {
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    urgency: "medium",
    budget: "",
  },
  isSubmitting: false,
  submitStatus: null,
  updateContactForm: (data) =>
    set((state) => ({
      contactForm: { ...state.contactForm, ...data },
    })),
  setSubmitting: (submitting) => set({ isSubmitting: submitting }),
  setSubmitStatus: (status) => set({ submitStatus: status }),
  resetForm: () =>
    set({
      contactForm: {
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        urgency: "medium",
        budget: "",
      },
      submitStatus: null,
    }),
}));
