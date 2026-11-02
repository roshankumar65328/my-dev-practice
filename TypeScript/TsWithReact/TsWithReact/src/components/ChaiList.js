import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "./Card";
function ChaiList({ items }) {
    return (_jsx("div", { children: items.map((chai) => (_jsx(Card, { name: chai.name, price: chai.price, isSpecial: chai.price > 30 ? true : false }, chai.id))) }));
}
export default ChaiList;
//# sourceMappingURL=ChaiList.js.map