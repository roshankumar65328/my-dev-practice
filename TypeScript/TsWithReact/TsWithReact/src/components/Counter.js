import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0); // useState me hamesha value number hi ayegi iss component me bas itna hi hai typescript
    return (_jsxs("div", { children: [_jsxs("p", { children: ["Cups Ordered: ", count] }), _jsx("button", { onClick: () => { setCount((val) => val + 1); }, children: "Order +1" })] }));
}
//# sourceMappingURL=Counter.js.map