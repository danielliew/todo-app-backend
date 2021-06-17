import app from ".";
import { PORT, HEALTHY } from "./constants";

app.listen(PORT, () => console.log(HEALTHY));
