class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.greetings2 = createElement("h2");
  }
  display() {
    this.input.position(displayWidth / 2 - 115, displayHeight / 2 - 200);
    this.input.size(180, 30);
    this.input.class("customInput");
    this.buttonImg.position(displayWidth / 2 - 140, displayHeight / 2 - 135);
    this.buttonImg.size(250, 100);

    this.buttonImg.mousePressed(() => {
      this.input.hide();
      this.buttonImg.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      // player.update();
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
      player.getRotation();

      this.greetings.html("Hello " + player.name);
      this.greetings.class("greeting");
      this.greetings.position(displayWidth / 2 - 100, displayHeight / 2 - 200);
      track1.play();
    });
  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }
  end() {
    if (player.rank >= 4) {
      var reset = createButton("Reset");
      reset.position(displayWidth - 200, 20);
      reset.mousePressed(() => {
        player.updateBikesAtEnd(0);
        player.updateCount(0);
        game.update(0);
        var playerref = database.ref("players");
        playerref.remove();
        this.greetings2.hide();
        window.location.reload();
      });
    }

    this.greetings2.html(
      "Congratulations " + player.name + " Your Rank is " + player.rank
    );
    this.greetings2.class("greeting");
    this.greetings2.position(displayWidth / 2 - 100, displayHeight / 2 - 50);
  }
}
