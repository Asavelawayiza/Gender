describe('Gender test', function () {
    it('Should Add a Female Name Entered', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('F Asa')
        assert.equal(instanceGender.nameAdded(), "F Asa");
    })

    it('Should Add a Male Name Entered', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('M Tee')
        assert.equal(instanceGender.nameAdded(), "M Tee");
    })

    it('Should Add all entered Names ', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('M Tee','F Asa')
        assert.equal(instanceGender.nameAdded(), "M Tee","F Asa");
    })

    it('Should return Empty if no Name is entered', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList("")
        assert.equal( instanceGender.nameAdded(), "");
    })

    it('Should return One Name if Name entered already Exits', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('M Tee')
        instanceGender.nameList('M Tee')
        assert.deepEqual( instanceGender.nameAdded(), ["M Tee"]);
    })

    it('Should filter for Female when Female Radio is Clicked', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('F Axola')
        instanceGender.nameList('M Tee')

        assert.deepEqual(instanceGender.nameCheck("F"),  ["F Axola"]);
    })

    it('Should filter for All if ShowAll Radio is Clicked', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('F Axola')
        instanceGender.nameList('M Tee')
        instanceGender.nameList('M Anda')


        assert.deepEqual(instanceGender.nameCheck(""),  ["F Axola", "M Tee", "M Anda"]);
    })

    it('Should filter for Male when Male Radio is Clicked', function () {
        var instanceGender = TypeOfGender();
        instanceGender.nameList('F Axola')
        instanceGender.nameList('M Tee')

        assert.deepEqual(instanceGender.nameCheck("M"),  ["M Tee"]);
    })
});