'use strict';

const e = React.createElement;

class sevenlineSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      sliderBtntext: 'Подробнее',
      slidea: 'https://www.ottos.ch/media/catalog/category/Zubehoer_zg.jpg',
      slideb: 'https://www.hd-background.com/wp-content/uploads/2016/05/desktop-red-white-blue-wallpaper-wallpaper.jpg',
      slidec: 'https://u.imageresize.org/v2/570434cc-6648-4214-b044-23b8016cde88.jpeg',
      slided: 'https://www.askwallpapers.com/pic/201503/1366x768/askwallpapers.com-46754.jpg',
      slidee: 'https://www.motto.net.ua/pic/201209/1366x768/motto.net.ua-28077.jpg',
      slidef: 'https://www.askwallpapers.com/pic/201502/1366x768/askwallpapers.com-32476.jpg',
      slideg: 'https://sportextreme.pro/wa-data/public/shop/themes/sport/img/slider/slider-102.png',
      slideaTitle: 'Обслуживай',
      slideaCaption: 'и ремонтируй с нами!',
      slideaUrl: '',
      slidebTitle: 'Честная рассрочка',
      slidebCaption: '0% взнос и 0% переплат на 24 месяца',
      slidebUrl: '',
      slidecTitle: 'Рассрочка',
      slidecCaption: '0% на 6 месяцев',
      slidecUrl: '',
      slidedTitle: 'Salomon 2018',
      slidedCaption: 'Новая коллецкия. Time to play',
      slidedUrl: '',
      slideeTitle: 'HEAD 2018',
      slideeCaption: 'Микропроцессоры в лыжах и сноубордах',
      slideeUrl: '',
      slidefTitle: 'Atomic 2018',
      slidefCaption: 'Новая коллецкия',
      slidefUrl: '',
      slidegTitle: 'Покоряй горы',
      slidegCaption: 'Вместе с нашим прокатом!',
      slidegUrl: ''
    };
  }

  render() {

    return e(
      "div",
      { id: "extremeCarousel", className: "carousel slide", "data-ride": "carousel" },
      React.createElement(
        "ol",
        { className: "carousel-indicators" },
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "0", "class": "active" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "1" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "2" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "3" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "4" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "5" }),
        React.createElement("li", { "data-target": "#extremeCarousel", "data-slide-to": "6" })
      ),
      React.createElement(
        "div",
        { className: "carousel-inner" },
        React.createElement(
          "div",
          { className: "carousel-item active" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slidea, alt: "First slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slideaTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slideaCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slideaUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slideb, alt: "Second slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slidebTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slidebCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slidebUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slidec, alt: "Third slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slidecTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slidecCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slidecUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slided, alt: "Third slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slidedTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slidedCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slidedUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slidee, alt: "Third slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slideeTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slideeCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slideeUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slidef, alt: "Third slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slidefTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slidefCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slidefUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "div",
          { className: "carousel-item" },
          React.createElement("img", { className: "d-block w-100", src: this.state.slideg, alt: "Third slide" }),
          React.createElement(
            "div",
            { "class": "carousel-caption d-md-block" },
            React.createElement(
              "h5",
              { className: "carouselTitle" },
              this.state.slidegTitle
            ),
            React.createElement(
              "p",
              { className: "carouselCaption" },
              this.state.slidegCaption
            ),
            React.createElement(
              "a",
              { className: "carouselButton", href: this.state.slidegUrl },
              this.state.sliderBtntext
            )
          )
        ),
        React.createElement(
          "a",
          { className: "carousel-control-prev", href: "#extremeCarousel", role: "button", "data-slide": "prev" },
          React.createElement("span", { "class": "carousel-control-prev-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { "class": "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { className: "carousel-control-next", href: "#extremeCarousel", role: "button", "data-slide": "next" },
          React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Next"
          )
        )
      )
    );
  }
}

const domContainer = document.querySelector('#sevenlineSlider');
ReactDOM.render(e(sevenlineSlider), domContainer);