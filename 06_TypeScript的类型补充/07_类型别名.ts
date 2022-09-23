// type关键字用于定义类型别名
type IDType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printID(id: IDType) {}
function printPoint(point: PointType) {}
