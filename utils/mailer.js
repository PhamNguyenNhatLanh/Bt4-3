const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "9c29f024f57c89",
      pass: "07e7a24f432ba3"
    }
  });

  module.exports = {
    sendmailFrogetPass: async function (to, URL) {
        return await transporter.sendMail({
            from: `NNPTUD <support@nnptud.com>`,
            to: to, 
            subject: "Yêu cầu đặt lại mật khẩu", 
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h1 style="color: #3498db; margin: 0;">NNPTUD System</h1>
                    <p style="color: #777;">Hệ thống quản lý người dùng</p>
                </div>
                
                <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-top: 0;">Yêu cầu đặt lại mật khẩu</h2>
                    <p style="color: #555; line-height: 1.5;">Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.</p>
                    
                    <p style="color: #555; line-height: 1.5;">Để đặt lại mật khẩu, vui lòng nhấp vào nút bên dưới:</p>
                    
                    <div style="text-align: center; margin: 25px 0;">
                        <a href="${URL}" style="display: inline-block; background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Đặt lại mật khẩu</a>
                    </div>
                    
                    <p style="color: #555; line-height: 1.5;">Hoặc bạn có thể copy và dán link này vào trình duyệt:</p>
                    <p style="background-color: #f5f5f5; padding: 10px; border-radius: 3px; word-break: break-all; font-size: 14px;">${URL}</p>
                    
                    <p style="color: #555; line-height: 1.5;">Link này sẽ hết hạn sau 10 phút vì lý do bảo mật.</p>
                </div>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #777; font-size: 12px;">
                    <p>Email này được gửi tự động, vui lòng không trả lời.</p>
                    <p>&copy; 2025 NNPTUD System - Bài tập quản lý người dùng</p>
                </div>
            </div>
            `, 
        });
    },
    
    sendPasswordResetSuccessEmail: async function (to, username) {
        return await transporter.sendMail({
            from: `NNPTUD <support@nnptud.com>`,
            to: to,
            subject: "Mật khẩu đã được đặt lại thành công",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h1 style="color: #3498db; margin: 0;">NNPTUD System</h1>
                    <p style="color: #777;">Hệ thống quản lý người dùng</p>
                </div>
                
                <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #27ae60; margin-top: 0;">Đặt lại mật khẩu thành công!</h2>
                    
                    <div style="text-align: center; margin: 20px 0;">
                        <div style="background-color: #dff0d8; display: inline-block; padding: 15px; border-radius: 50%; margin-bottom: 15px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#27ae60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                    <p style="color: #555; line-height: 1.5; text-align: center; font-size: 18px;">Xin chào <strong>${username}</strong>,</p>
                    
                    <p style="color: #555; line-height: 1.5;">Mật khẩu tài khoản của bạn đã được đặt lại thành công. Bây giờ bạn có thể đăng nhập bằng mật khẩu mới.</p>
                    
                    <p style="color: #555; line-height: 1.5;">Nếu bạn không thực hiện hành động này, vui lòng liên hệ ngay với bộ phận hỗ trợ.</p>
                    
                    <div style="text-align: center; margin: 25px 0;">
                        <a href="http://localhost:3000/auth/login" style="display: inline-block; background-color: #27ae60; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Đăng nhập ngay</a>
                    </div>
                </div>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #777; font-size: 12px;">
                    <p>Email này được gửi tự động, vui lòng không trả lời.</p>
                    <p>&copy; 2025 NNPTUD System - Bài tập quản lý người dùng</p>
                </div>
            </div>
            `,
        });
    }
}