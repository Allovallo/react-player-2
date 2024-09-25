export const Controls = ({ current, total, onChange }) => {
  return (
    <section>
      <button type="button" disabled={current === 1} onClick={() => onChange(-1)}>
        Назад
      </button>
      <button type="button" onClick={() => onChange(+1)} disabled={current + 1 === total}>
        Вперед
      </button>
    </section>
  );
};
