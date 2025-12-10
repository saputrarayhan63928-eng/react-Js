import OnlineStatus from "./onlineStatus";
import OfflineStatus from "./offlineStatus";

function StatusDetector(Status) {
    const checkInternet = Status.checkInternet
    if (checkInternet) {
        return < OnlineStatus />;
    } else {
        return < OfflineStatus />;
    }
}

export default StatusDetector;