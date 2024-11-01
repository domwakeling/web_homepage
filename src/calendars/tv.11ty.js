const {
    ICalCalendar,
    // ICalAlarmType,
    ICalCalendarMethod,
} = require('ical-generator')

class Test {

    data() {
        return {
            permalink: '/calendars/tv/feed.ics'
            // name: "Ted",
            // layout: "teds-rad-layout",
            // … other front matter keys
        };
    }
    // or `async render({name}) {`
    render({ tv }) {

        const cal = new ICalCalendar({
            name: "TV Shows",
            description: "Upcoming TV shows",
            // prodId: {
            //     company: calendar.organisation,
            //     product: 'Eleventy',
            // },
            // url: calendar.url + this.page.url,
            method: ICalCalendarMethod.PUBLISH,
        })

        for (const show of tv) {
            // Create a calendar event from each page
            const event = cal.createEvent({
                // id: `${calendar.url}/${page.fileSlug}`,
                start: new Date(show.release),
                summary: show.showName,
                allDay: true
            })

        }

        // Generate the ical file and return it for Eleventy
        return cal.toString()
    }
}

module.exports = Test;