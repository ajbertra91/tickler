describe("ticklerApp", function () {
  it("has a calendar", function() {
    var app = new Rolodex();
    expect(app.calendar).toBeDefined();
  });
  it("has a current time", function() {
    var app = new Rolodex();
    console.debug(app);
    expect(app.currentTime).toBeDefined();
  });
});