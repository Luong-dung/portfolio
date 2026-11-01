const projects = [
  {
    number: "01",
    category: "Thành tích · Thuật toán",
    name: "Giải Ba OLP Tin học SV",
    description:
      "Giải Ba khối Chuyên Tin tại kỳ thi Olympic Tin học Sinh viên Việt Nam, năm 2025.",
    className: "project-card--peach",
    mark: "🏆",
  },
  {
    number: "02",
    category: "Thành tích · Thuật toán",
    name: "Giải Khuyến khích OLP",
    description:
      "Giải Khuyến khích khối Chuyên Tin tại kỳ thi Olympic Tin học Sinh viên Việt Nam, năm 2025.",
    className: "project-card--blue",
    mark: "🎖️",
  },
  {
    number: "03",
    category: "Học vấn · HUS",
    name: "Khoa học Dữ liệu",
    description:
      "Sinh viên ngành Khoa học Dữ liệu tại Trường ĐH Khoa học Tự nhiên (ĐHQGHN), khóa 2022 - 2026.",
    className: "project-card--yellow",
    mark: "🎓",
  },
];

const skills = ["C++", "Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "Git", "Linux"];

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Về đầu trang">
          portfolio<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <a href="#about">Giới thiệu</a>
          <a href="#projects">Dự án & Thành tích</a>
          <a className="nav-contact" href="#contact">
            Liên hệ <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTFOLIO CÁ NHÂN</p>
            <h1>
              Xin chào,
              <br />
              mình là <span className="highlight">Lương Tiến Dũng.</span>
            </h1>
            <p className="hero-description">
              Mình là sinh viên Khoa học Dữ liệu có niềm đam mê đặc biệt với giải thuật,
              lập trình thi đấu và Machine Learning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Khám phá thành tích <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                Kết nối với mình
              </a>
            </div>
            <div className="cv-downloads" aria-label="Tải CV PDF">
              <p>Tải CV <span>PDF · Tiếng Anh</span></p>
              <div className="cv-links">
                <a className="cv-link" href={`${import.meta.env.BASE_URL}cv/CV_Luong_Dung_Software_Algorithm.pdf`} download>
                  Software / Algorithm <span aria-hidden="true">↓</span>
                </a>
                <a className="cv-link" href={`${import.meta.env.BASE_URL}cv/CV_Luong_Dung_AI_ML_Data.pdf`} download>
                  AI / ML / Data <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Minh họa giao diện portfolio" role="img">
            <div className="art-orbit art-orbit--outer" />
            <div className="art-orbit art-orbit--inner" />
            <div className="art-spark art-spark--one">✳</div>
            <div className="art-spark art-spark--two">✳</div>
            <div className="art-card">
              <div className="art-card-top">
                <span /><span /><span />
                <span className="art-card-label">HELLO, WORLD!</span>
              </div>
              <div className="code-lines" aria-hidden="true">
                <p><i>const</i> <b>passion</b> = <em>"algorithms"</em>;</p>
                <p><i>const</i> <b>tools</b> = <em>"data science"</em>;</p>
                <p className="code-gap"><strong>train</strong>(passion, tools);</p>
                <p className="code-comment">// bắt đầu từ đây ↓</p>
              </div>
              <div className="art-card-footer">
                <span>DESIGNED WITH LOGIC</span>
                <span>✦</span>
              </div>
            </div>
            <span className="art-caption">THUẬT TOÁN · DỮ LIỆU · MÔ HÌNH</span>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> Cuộn để khám phá
          </a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / GIỚI THIỆU</p>
            <h2>Một chút về mình<span className="highlight">.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              Mình đam mê giải quyết các bài toán khó bằng tư duy thuật toán và dữ liệu.
            </p>
            <div className="about-detail">
              <p>
                Xin chào, mình là Lương Tiến Dũng. Mình hiện đang theo học ngành Khoa học dữ liệu tại Trường Đại học Khoa học Tự nhiên (HUS). Mình có thế mạnh về tư duy thuật toán, lập trình thi đấu (Competitive Programming) và xử lý dữ liệu.
              </p>
              <p>
                Mục tiêu của mình là trở thành một Data Scientist / AI Engineer, ứng dụng thế mạnh thuật toán để xây dựng các mô hình học máy hiệu quả.
              </p>
              <div className="skill-list" aria-label="Công nghệ và kỹ năng">
                {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">02 / CHỌN LỌC</p>
              <h2>Thành tích & Học vấn<span className="highlight">.</span></h2>
            </div>
            <p className="heading-note">Những cột mốc mình đạt được<br />trong thời gian qua.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number} — HIGHLIGHT</span>
                  <span className="project-mark" aria-hidden="true">{project.mark}</span>
                  <span className="project-visual-caption">{project.category.toUpperCase()}</span>
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
                </div>
                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">03 / LIÊN HỆ</p>
          <div className="contact-content">
            <h2>Cùng tạo nên<br />điều gì đó <span className="highlight">hay ho.</span></h2>
            <div className="contact-aside">
              <p>Bạn có một ý tưởng, một cơ hội hoặc chỉ muốn chào hỏi? Hộp thư của mình luôn mở.</p>
              <a className="button button-light" href="mailto:dung.luongtien@example.com">
                dung.luongtien@example.com <ArrowIcon diagonal />
              </a>
              <a className="email-note text-link" href="https://github.com/Luong-dung" target="_blank" rel="noopener noreferrer">GitHub: github.com/Luong-dung <ArrowIcon diagonal /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">portfolio<span>.</span></a>
        <p>Được làm với tư duy thuật toán và một chút cà phê.</p>
        <span>© {new Date().getFullYear()} Lương Tiến Dũng</span>
      </footer>
    </>
  );
}

export default App;
