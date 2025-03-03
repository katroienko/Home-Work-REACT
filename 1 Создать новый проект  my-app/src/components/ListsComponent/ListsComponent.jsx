export default function ListsComponent() {
    return (
      <div>
        <h3>Ordered List</h3>
        <ol>
          <li>Кошки любят спать</li>
          <li>Кошки любят играть
            <ol>
              <li>Играть с мячиком</li>
              <li>Ловить лазерную точку</li>
            </ol>
          </li>
          <li>Кошки мурлыкают, когда счастливы</li>
        </ol>
        

        <h3>Unordered List</h3>
        <ul>
          <li>Кошки любят сидеть в коробках</li>
          <li>Кошки умываются лапками
            <ul>
              <li>Очищают мордочку</li>
              <li>Вылизывают шерстку</li>
            </ul>
          </li>
          <li>Кошки независимые, но любят внимание</li>
        </ul>
      </div>
    );
  }
  