import connectDb from "../../../middleware/mongoose";
import multer from 'multer';
import path from 'path';


// {


// // export async function POST(request, res) {
// //     try {
// //         await connectDb();

// //         // Multer storage configuration
// //         console.log("REQUEST IN DATA UPLOAD API: ", request)
// //         const storage = multer.diskStorage({
// //             destination: (request, file, cb) => {
// //                 cb(null, './uploads'); // Specify the destination folder
// //             },
// //             filename: (req, file, cb) => {
// //                 // Generate a unique filename
// //                 const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //                 const ext = path.extname(file.originalname);
// //                 cb(null, file.fieldname + '-' + uniqueSuffix + ext);
// //             }
// //         });

// //         // Multer upload configuration
// //         const upload = multer({ storage }).single('file'); // 'file' is the name attribute of the file input field in your form
// //         try {
// //             await upload(request)
// //             return Response.json({success: "true"})
// //         } catch (error) {
// //             return Response.json({success: "no"})
            
// //         }

// //         return Response.json({success: "false"})
// //     } catch (error) {
// //         console.error('Error:', error);
// //         return Response.json({error: "error"})
// //     }
// // }

// }





// {
// // import connectDb from "../../../middleware/mongoose";
// // import multer from 'multer';
// // import path from 'path';

// // export async function POST(request, response) { // Changed parameter name to 'response'
// //     try {
// //         await connectDb();

// //         // Multer storage configuration
// //         console.log("REQUEST IN DATA UPLOAD API: ", request)
// //         const storage = multer.diskStorage({
// //             destination: (request, file, cb) => {
// //                 cb(null, './uploads'); // Specify the destination folder
// //             },
// //             filename: (req, file, cb) => {
// //                 // Generate a unique filename
// //                 const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //                 const ext = path.extname(file.originalname);
// //                 cb(null, file.fieldname + '-' + uniqueSuffix + ext);
// //             }
// //         });

// //         // Multer upload configuration
// //         const upload = multer({ storage }).single('file'); // 'file' is the name attribute of the file input field in your form

// //         upload(request, response, (err) => {
// //             if (err instanceof multer.MulterError) {
// //                 // Multer error handling
// //                 // return response.status(400).json({ message: 'Multer error: ' + err.message });
// //                 return response.json({ error: "error" });
// //             } else if (err) {
// //                 // Other errors
// //                 // return response.status(500).json({ message: 'Error uploading file: ' + err.message });
// //                 return response.json({ error: "error" });
// //             }
            
// //             // File uploaded successfully
// //             // return response.status(200).json({ message: 'File uploaded successfully' });
// //             return response.json({ success: true });
            
// //         });
// //     } catch (error) {
// //         console.error('Error:', error);
// //         return response.json({ error: "error" });
// //     }
// // }
// }

// {
   


export async function POST(request) {
        try {
            await connectDb();
    
            const storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, 'public/uploads');
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const ext = path.extname(file.originalname);
                    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
                }
            });
    
            const upload = await multer({ storage }).single('file');
            console.log(request)
            try {
                let a = await new Promise((resolve, reject) => {
                    upload(request, res, (err) => {
                        if (err) {
                            console.error('Upload error:', err);
                            Response.json({ success: false, message: 'Couldn"tFile uploaded successfully' });
                            reject(err);
                        } else {
                            Response.json({ success: true, message: 'File uploaded successfully' });
                            resolve();
                        }
                    });
                });
                console.log("a: ",a)
                Response.json({ success: true, message: 'File uploaded successfully' });
            } catch (error) {
                Response.json({ success: false, error: 'Error uploading file' });
            }
        } catch (error) {
            console.error('Error mw:', error);
            Response.json({ success: false, error: 'Internal server error' });
        }
    }
    
// }