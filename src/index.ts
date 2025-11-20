import app from './server';
import { security } from './config/security.config';

security(app);
app.listen(3000,()=>{
    console.log("server running ");   
})