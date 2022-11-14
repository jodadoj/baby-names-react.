import NamedPlace from "./NamedPlace";

function MainContent(): JSX.Element {
    return (
        <>
            <NamedPlace
                title={"Greenwich Park"}
                name ={"Very swell place to be."}
                country ={"UK"}
                img ={"https://www.royalparks.org.uk/_media/images/greenwich-park/cover-photos/autumn/Greenwich-Park-2014-The-Avenue-Max-A-Rush-DSC-0198.jpg/w_560.jpg"}
                imgAlt ={"A tree lit by sunlight in the park next to a large road"}
                url ={"https://goo.gl/maps/9ij6BBuTyh51QcmQ8"}
                details ={"I like the views, biased by proximity."}
            />
            <NamedPlace
                title={"Yellowstone Park"}
                name ={"Dangerously hot."}
                country ={"US"}
                img ={"https://3qbqmv3k0dsayahrd3pw8jru-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/AdobeStock_95429848.jpeg"}
                imgAlt ={"A tree lit by sunlight in the park next to a large road"}
                url ={"https://goo.gl/maps/r5jqMrypUM3i67ry9"}
                details ={"Would the world end if you threw a pack of menthos in the geysers? Just asking questions here."}
            />
            <NamedPlace
                title={"The Polar Circles"}
                name ={"Dangerously cold."}
                country ={"US, Russia, Denmark, Finland, Sweden, Norway, Anarctica"}
                img ={"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555290916/shape/mentalfloss/istock-481931116.jpg?itok=uh7k6INS"}
                imgAlt ={"Aurora above the frozen peaks"}
                url ={"https://goo.gl/maps/65qd3NTY73S5Mbp19"}
                details ={"I've never seen a penguin but I'd like to think they're more fluffy than wet."}
            />
        </>
    );
  }

export default MainContent;