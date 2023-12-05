import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
    <div id="body">
        <div className='bodybg'>
          <img alt="" src="./img/photo_2023-11-29_09-40-28.jpg" />
        </div>
        <div id="wrapper">
        <div id="wrapper__main">  
          <div  className='header py-3'>
            <div className="logo">
              <img src="./img/image20.png" alt="Logo" />
              <img src="./img/Group35553.png" alt="Logo" />
            </div>
            <div className='box'>

            </div>
            <div>
              <button type='button' className="py-2 px-3 user btn btn-primary">
                <i className="user__icon fa-regular fa-user"></i>
                <p className='user__title m-0'>Tài khoản</p>
                <i className="user__down fa-solid fa-chevron-down px-7"></i>
              </button>
            </div>
          </div>
          <div  className="banner">
            <div className="banner__Content w-[auto] pt-6 pb-6">
              <div className='banner-title'>
               <span className='title'>Thách thức ẩm thực cùng</span>
               <p className='subtitle mb-0'>Nga Sumo</p>
              </div>
              <span className='content w-75'>Focus these finish requirements me die money spaces hop next. Feed explore best solutions down sky re-inventing turn.</span>
              <div className="time-box py-12">
                <div className="container">
                  <div className='num'>12</div>
                  <div className='unit'>ngày</div>
                </div>
                <div className="container">
                  <div className='num'>20</div>
                  <div className='unit'>Giờ</div>
                </div>
                <div className="container">
                  <div className='num'>45</div>
                  <div className='unit'>Phút</div>
                </div>
                <div className="w-[100%] container">
                  <div className='num'>24</div>
                  <div className='unit'>Giây</div>
                </div>
              </div>
              <button className='button p-1424' type='button'>
                 <span>Tham gia ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='afterbanner-container'>
      <div className="introduction">
          <div className="container m-0">
            <div className="left col">
              <img className='img' src="./img/Frame1000001182.png" alt="" />
            </div>
            <div className="right col py-44">
              <div className="content">
                <span className='mb-0 title'>Giới thiệu cuộc thi</span>
                <p className='mb-0 text'>Eget nec leo eu tempus porta etiam odio tincidunt. Interdum facilisis id id placerat dolor odio. Gravida aliquet orci sagittis fermentum. Vulputate odio odio neque sodales lectus consectetur pretium justo. Massa massa cursus et tellus quam integer id. Sit id nunc ornare volutpat in in maecenas sagittis nunc. Nisl ultrices augue hac semper at malesuada tellus. Interdum facilisis id id placerat dolor odio. Gravida aliquet orci sagittis fermentum</p>
              </div>
              <div className='button'>
                 <button className='button_btn p-1424' href="#">
                  Xem thêm
                 </button>
              </div>
            </div>
          </div>  
      </div>
      <div id="question__title">
         <p className="text mb-0">Danh sách câu hỏi</p>
      </div>
      <div id="question__list">
      
      </div>
      <div id="video">
        <div className='m-0 container'>
          <video src="./video/Snaptik.app_7187964146929995034.mp4" controls></video>
        </div>
      </div>
      <div id="results">
        <div className="container p-0">
          <div className="text1">
            <span className='title'>Bạn đã hoàn thành:</span>
            <span className='count'>1/20</span>
          </div>
          <div className="guide">
             <div className="guide_left guide_btn">
              <a className='btn_sp p-0 m-0'>
              <i className="fa-regular fa-circle-question"></i>
                <span className="btn__title">
                  Thể lệ và quà tặng
                </span>             
              </a>
             </div>
             <div className="guide_right guide_btn">
              <a className='btn_sp p-0 m-0'>
                <i className="fa-regular fa-circle-question"></i>
                <span className="btn__title">
                  Bảng kết quả
                </span>
              </a>
             </div>
          </div>
        </div>
      </div>
      <div id="questions">
        <div className="question">
          <p className="question__title m-0">
          Trong video trước khi tham gia thách đấu chị Nga Sumo đã ăn bao nhiêu tô phở?
          </p>
        </div>
      </div>
      <div id="answers__list">
        <div className='answers'>
          <div className='container p-0 m-0'>
            <img src="./img/phobo-800x450.jpg" alt="" />
            <div className='title'>
             <p className='m-0'>2 tô</p>
            </div>
            <button>
              <span>Chọn</span>
            </button>
          </div>
          <div className='container p-0 m-0'>
            <img src="./img/phobo-800x450.jpg" alt="" />
            <div className='title'>
             <p className='m-0'>2 tô</p>
            </div>
            <button>
              <span>Chọn</span>
            </button>
          </div>
          <div className='container p-0 m-0'>
            <img src="./img/phobo-800x450.jpg" alt="" />
            <div className='title'>
             <p className='m-0'>2 tô</p>
            </div>
            <button>
              <span>Chọn</span>
            </button>
          </div>
          <div className='container p-0 m-0'>
            <img src="./img/phobo-800x450.jpg" alt="" />
            <div className='title'>
             <p className='m-0'>2 tô</p>
            </div>
            <button>
              <span>Chọn</span>
            </button>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="donors">
          <div className="donors__title">
            <span>Tài trợ cuộc thi</span>
          </div>
          <div className="donors__items">
            <div className="donors-item">
              <img src="./img/TPBANK.png" alt="" />
            </div>
            <div className="donors-item">
              <img src="./img/DRNET.png" alt="" />
            </div>
            <div className="donors-item">
              <img src="./img/MCV.png" alt="" />
            </div>
            <div className="donors-item">
              <img src="./img/HTV.png" alt="" />
            </div>
            <div className="donors-item">
              <img src="./img/CGV.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-wrap">
          <div className='footer-wrap1'>a</div>
          <div className='footer-wrap2'>b</div>
        </div>
        <div className='footer-title'>
           <p>Copyright © 2023 Nga Sumo, All Rights Reserved</p>
        </div>
      </div>
      </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
    </main>
  )
}
