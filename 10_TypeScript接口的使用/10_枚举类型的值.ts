// 一般情况下枚举类型用大写
// 默认left值是0,后面依次递增
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  console.log(direction);

  switch (direction) {
    case Direction.LEFT:
      console.log('改变角色方向向左');
      break;
    case Direction.RIGHT:
      console.log('改变角色方向向右');
      break;
    case Direction.TOP:
      console.log('改变角色方向向上');
      break;
    case Direction.BOTTOM:
      console.log('改变角色方向向下');
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.BOTTOM);

export {};
