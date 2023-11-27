import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

export default function Chat({user}) {

    return (
        <div style={{height: '50vh', zIndex: '1000'}}>
            <SendbirdApp
                // Add the two lines below.
                appId={'E6C5933F-D347-403E-8C88-F077604110DF'}   // Specify your Sendbird application ID.
                userId={user}        // Specify your user ID.
            />
        </div>
    );
}