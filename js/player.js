class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
    this.rotation = 0;
    this.blast = false;
  }

  getCount() {
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value", data => {
      playerCount = data.val();
    });
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 320;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 150;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 150;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 320;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
      rotation: this.rotation,
      blast: this.blast
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerindex = "players/player" + this.index;
    database.ref(playerindex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
      rotation: this.rotation,
      blast: this.blast
    });
  }

  getRotation() {
    var playerRotationRef = database.ref("players/player" + this.index);
    playerRotationRef.on("value", data => {
      var data = data.val();
      this.rotation = data.rotation;
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
      this.distance = data.distance;
    });
  }

  static getPlayersInfo() {
    var playerinforef = database.ref("players");
    playerinforef.on("value", data => {
      allplayers = data.val();
    });
  }

  getBikesAtEnd() {
    database.ref("bikesAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  updateBikesAtEnd(rank) {
    database.ref("/").update({
      bikesAtEnd: rank
    });
  }
}
