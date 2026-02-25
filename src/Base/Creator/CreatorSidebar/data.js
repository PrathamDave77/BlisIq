export const initialSidebarData = [
  {
    id: "1",
    type: "module",
    title: "Module 1: Introduction to Python",
    children: [
      { id: "1", type: "page", title: "What is Python?" },
      { id: "2", type: "page", title: "Installing Python & VS Code" },
      { id: "3", type: "page", title: "Running Python scripts" },
      { id: "4", type: "module", title: "Python syntax basics", children: [] },
    ],
  },
  {
    id: "2",
    type: "module",
    title: "Module 2: Variables & Data Types",
    children: [
      { id: "1", type: "page", title: "Variables and naming rules" },
      { id: "2", type: "page", title: "Numbers (int, float)" },
      { id: "3", type: "page", title: "Type casting" },
      { id: "4", type: "quiz", title: "Quiz 2" },
    ],
  },
  { id: "3", type: "page", title: "Common exceptions" },
  {
    id: "4",
    type: "module",
    title: "Module 3: Operators & Expressions",
    children: [],
  },
  {
    id: "5",
    type: "module",
    title: "Module 4: Control Flow",
    children: [
      { id: "1", type: "page", title: "if, elif, else" },
      { id: "2", type: "page", title: "Nested conditions" },
      { id: "3", type: "page", title: "match-case (optional advanced...)" },
      { id: "4", type: "quiz", title: "Quiz 4" },
    ],
  },
  { id: "6", type: "module", title: "Module 5: Loops", children: [] },
  { id: "7", type: "module", title: "Module 6: Functions", children: [] },
  { id: "8", type: "quiz", title: "Final test" },
];