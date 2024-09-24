import { Component } from 'react';

export class Reader extends Component {
  state = {
    index: 0,
  };

  onPrev = () => {
    this.setState(state => ({ index: state.index - 1 }));
  };

  onNext = () => {
    this.setState(state => ({ index: state.index + 1 }));
  };

  render() {
    return (
      <div>
        <section>
          <button type="button" onClick={this.onPrev}>
            Вперед
          </button>
          <button type="button" onClick={this.onNext}>
            Назад
          </button>
        </section>

        <p>
          {/* 1/10 */}
          {this.state.index + 1} / {this.props.items.length}
        </p>

        <article>
          <h2>Lorem ipsum dolor sit, amet </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit eos quaerat
            necessitatibus corporis nisi sapiente cumque deserunt consequatur, eaque animi cum
            dolores laboriosam sunt. Error dicta iure eligendi velit! Id amet aliquam dolore
            necessitatibus nesciunt voluptatem omnis laudantium facere consequuntur impedit
            perferendis consectetur facilis officia soluta porro minima, quis labore quae, eveniet
            culpa rem. Laborum temporibus dolorum quia a?
          </p>
        </article>
      </div>
    );
  }
}
