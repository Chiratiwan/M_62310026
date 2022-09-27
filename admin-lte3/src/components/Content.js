import React from "react";

export default function Content() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Content</h1>
                <div>
                  <img
                    src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/305091064_591742622597505_7027297502438319333_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGM8CNn0-dbj-ns_IZLfHAV-IAPXGourIL4gA9cai6sgmDSzrWGUlqoR-Lqm-1pXwNsxg1aqMXHeG3qqmePjhH2&_nc_ohc=URQXeydjBzUAX9wGQot&_nc_ht=scontent.fbkk10-1.fna&oh=03_AVLKFUrMovOsLj_9fmHCxPE7SAblp6W_59y4aIWBux9OEQ&oe=6340858B"
                    classname="img-square"
                    alt="User Image"
                    width={500}
                  />
                </div>
              </div>

              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">About me</a>
                  </li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
      </div>
    </div>
  );
}
