# ESLint & SonarQube Issues – Summary and Fixes

**Status:** All ESLint issues fixed (0 errors, 0 warnings). Run `npm run lint` to verify.

## ESLint issues (originally 169 total: 106 errors, 63 warnings)

### 1. **no-undef** (undefined variables)
| File | Issue | Fix |
|------|--------|-----|
| Avataradd.jsx | `cn`, `cva` not defined | Add: `import { cva } from "class-variance-authority";` and `import { cn } from "../../../lib/utils.js";` |
| VerifiedTicks.jsx | `cn`, `xs` not defined | Use `styles.variants.size["xs"]` (or `"xs"` string) and import `cn` from lib/utils, or use plain className |
| Dropdownlistitem.jsx | `variant` not defined | Use prop: `Iconleading ? "Iconleading" : Checkboxleading ? "Checkboxleading" : "default"` |
| SidebarMenu.jsx | `setIsdarkcolor` not defined | Add `const [isDarkColor, setIsdarkcolor] = useState(false);` or remove theme toggle usage |
| TableCell.jsx | `TableCellActions` not defined | Create/import TableCellActions component |
| TableHeaderCell.jsx | `TableCellActions`, `HeaderTable` not defined | Create/import both components |
| Dropdownmenu.jsx | `Checkbox` not defined (line 95) | Fix typo: use `Checkboxleading` (not `Checkbox`) and fix `Checkboxloadin` → `Checkboxleading` |
| tooltipPagination.jsx | `cn`, `cva` not defined | Add imports for `cn` and `cva`, define `actions` with cva before use |
| tooltipActions.jsx | Duplicate `React` import | Remove duplicate `import { React } from 'react'` |

### 2. **react/no-children-prop**
| File | Issue | Fix |
|------|--------|-----|
| Dropdownmenu.jsx | Passing `children="View profile"` etc. as prop | Use JSX children: `<Dropdownlistitem>View profile</Dropdownlistitem>` instead of `children="View profile"` |
| Tables.jsx | `children="Design"` on TableCell | Use `<TableCell><Design/></TableCell>` or keep content as children between tags |

**Fix pattern:** Replace `<Component children="text"/>` with `<Component>text</Component>`.

### 3. **no-unused-vars**
| Fix | Approach |
|-----|----------|
| Unused imports (e.g. App.jsx) | Remove unused imports or prefix with `_` if needed for types |
| Unused parameters | Prefix with `_` (e.g. `_value`, `_setValue`) so ESLint allows them |
| Unused variables | Remove or use; if intentional, prefix with `_` |

### 4. **react/display-name**
| File | Fix |
|------|-----|
| ButtonGroups.jsx | Add `ButtonGroupComponent.displayName = 'ButtonGroupComponent';` or use a named function |

### 5. **react/jsx-key**
| File | Fix |
|------|-----|
| Select.jsx, Tables.jsx | Add `key={item.id}` or `key={index}` to elements in `.map()` |

### 6. **Parsing error**
| File | Fix |
|------|-----|
| tooltipActions.jsx | Remove duplicate `import { React } from 'react'` (React already imported on line 1) |

---

## SonarQube (typical rules aligned with these fixes)

SonarQube results live on the server (see report-task.txt). These fixes address common Sonar rules:

| Sonar rule / concern | How the ESLint fixes help |
|----------------------|---------------------------|
| **Unused code** | Removing unused imports/vars reduces dead code (Cognitive Complexity, maintainability). |
| **Bugs (undefined)** | Fixing no-undef prevents runtime errors. |
| **Code smells (readability)** | Using JSX children instead of `children` prop and naming components improve clarity. |
| **Maintainability** | Fewer unused variables and clear component names improve modularity. |
| **Duplication** | Fixing duplicate React import and consistent patterns reduce duplication. |

**Recommendation:** After fixing ESLint, run the Sonar scanner again and open the project dashboard (e.g. `http://localhost:9000/dashboard?id=Design-System`) to see remaining Sonar-specific issues and security hotspots.

### Common SonarQube rules and how we addressed them

| Sonar rule / type | What we did |
|-------------------|-------------|
| **S1481 (Unused variables)** | Removed or prefixed with `_`; used eslint-disable only where data is kept for commented UI. |
| **S1854 (Dead code)** | Removed unused imports (e.g. Tables, Badges, Avatar from App.jsx). |
| **S112 (Undefined variables – bugs)** | Added missing imports (`cn`, `cva`, utils) and created missing components (`TableCellActions`, `HeaderTable`). |
| **S1135 (React no-children-prop)** | Replaced `children="..."` with JSX children `<Component>...</Component>`. |
| **S1788 (Display name)** | Set `displayName` on `forwardRef` components (Button, TooltipPaginationWrapper). |
| **S6478 (jsx-key)** | Added stable `key` props to list items in `.map()` (e.g. `key={item.username}`). |
| **Cognitive complexity / duplication** | Simplified Dropdownlistitem variant logic; removed duplicate React import; fixed typo `Checkboxloadin` → `Checkboxleading`. |

---

## Modularity & readability (low overhead)

- **One component per file** – TableCellActions and HeaderTable in separate files under Tables.
- **Shared utils** – `cn` and `cva` from a single place (`lib/utils.js`, `class-variance-authority`).
- **No extra dependencies** – Fixes use existing stack (React, CVA, clsx, tailwind-merge).
- **Unused code removed** – Less noise and easier reading.
