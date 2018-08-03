var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Alex';
        var text = 'Greetings from Alex!';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Alex';
        var longitude = 15;
        var latitude = 19;
        var url = 'https://www.google.com/maps?q='+latitude+','+longitude;

        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(url);
        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage).toMatchObject({from, url});
    });
});