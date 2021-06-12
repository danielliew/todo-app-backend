import app from "./src";
import { PORT } from "./src/constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
