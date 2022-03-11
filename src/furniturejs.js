import "./App.css";
import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";


import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Furniture.json";
import { useState } from "react";



function Furnitur() {
  const [items, setItems] = useState(data);

  const [activeKey, setActiveKey] = useState(0);

  const filterCat = (catItem) => {
    const catItems = data.filter((category) => {
      return category.category === catItem;
    });
    setItems(catItems);
  };

  const filterSubCat = (catItem) => {
    const catItems = data.filter((category) => {
      return category.sub_category === catItem;
    });
    setItems(catItems);
  };
  return (
    <div>
      <CNav
        variant="pills"
        layout="justify"
        role="tablist"
        style={{
          height: "60px",
          marginTop: "90px",
          paddingLeft: "10px",
          cursor: "pointer",
          // marginBottom: "40px",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          marginContent: "center",
          marginLeft: "20%  "
        }}
      >
        {/* <CNavItem>
      <CNavLink active={activeKey === 1} className="dropdown">
        <div className="dropdown">
          <div onClick={() => filterCat("HOME DECOR") & setActiveKey(1)}>
            Home Furnitures
          </div>
          <div className="dropdown-content">
            <CNavLink
              onClick={() => filterSubCat("DOUBLE BED") & setActiveKey(1)}
              active={activeKey === 2}
            >
              Double Bed
            </CNavLink>
            <CNavLink
              onClick={() => filterSubCat("CHAIR") & setActiveKey(1)}
              active={activeKey === 2}
            >
              Chair
            </CNavLink>
            <CNavLink
              onClick={() => filterSubCat("DINING TABLE") & setActiveKey(1)}
              active={activeKey === 2}
            >
              Dining Table
            </CNavLink>
          </div>
        </div>
      </CNavLink>
    </CNavItem> */}

        <CNavLink className="nav-prod"
          onClick={() => filterSubCat("DOUBLE BED") & setActiveKey(6)}
          active={activeKey === 6}
        >
          <img className="products" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4UftztkjJHmhVVORYRPOKHDyBECu6NbGgQ&usqp=CAU" height="50" width="50" alt="Logo" /><br />
          Double Bed<br />
        </CNavLink>
        <CNavLink className="nav-prod"
          onClick={() => filterSubCat("CHAIR") & setActiveKey(7)}
          active={activeKey === 7}
        >
          <img className="products" src="https://5.imimg.com/data5/DQ/XK/MY-56039866/wooden-chair-500x500.jpg" height="50" width="50" /> <br/>

          Chair
        </CNavLink>
        <CNavLink className="nav-prod"
          onClick={() => filterSubCat("DINING TABLE") & setActiveKey(8)}
          active={activeKey === 8}
        >
          <img className="products" src="https://freepngimg.com/thumb/dining_table/4-2-dining-table-transparent.png" height="50" width="50" alt="Logo" /><br />

          Dining Table
        </CNavLink>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("WORK FROM HOME") & setActiveKey(9)}
            active={activeKey === 9}
          >
            <img className="products" src="https://p.kindpng.com/picc/s/313-3134582_study-table-top-view-png-transparent-png.png" height="50" width="50" alt="Logo" /><br />

            TABLE
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("clock") & setActiveKey(5)}
            active={activeKey === 5}
          >
            <img className="products" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuE-GJL0A0lpxt5KAz5ARBqmVvc8aH4sLgIA&usqp=CAU" height="50" width="50" /> <br />
            Wall Clock
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("vase") & setActiveKey(10)}
            active={activeKey === 10}
          >
            <img className="products" src="https://www.ubuy.com.bh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFiRUlkTHJjTUwuX0FDX1NMMTQwMF8uanBn.jpg" height="50" width="50" /> <br />
            Flower Pot
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("marble") & setActiveKey(11)}
            active={activeKey === 11}
          >
            <img className="products" src="https://n2.sdlcdn.com/imgs/i/0/7/Chitrahandicraft-Marble-Table-Vase-9-SDL394471659-1-0a899.png" height="50" width="50" /> <br />
            Marble
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("fountain") & setActiveKey(12)}
            active={activeKey === 12}
          >
            <img className="products" src="https://www.backyardxscapes.com/wp-content/uploads/2020/12/als-garden-art-thumbnail-224x300.png" height="50" width="50" /> <br />
            Fountain
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => filterCat("temple") & setActiveKey(13)}
            active={activeKey === 13}
          >
            <img className="products" src="https://prayeveryday.in/wp-content/uploads/2020/06/sm11-250x250.png" height="50" width="50" /> <br />
            Temple
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="nav-prod"
            onClick={() => setItems(data) & setActiveKey(0)}
            active={activeKey === 0}
          >
            <br />
            All
          </CNavLink>
        </CNavItem>
        {/* <CNavItem>
          <CNavLink href="#" disabled>

          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>

          </CNavLink>
        </CNavItem>
        <CNavItem className="switch mode button">
          <CNavLink  	
        
          >
          

        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>

        </CNavLink>
      </CNavItem>

      <CNavItem>
        <CNavLink href="#" disabled>

        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>

        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>

        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>


        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
          Quotations
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="mailto:guest@gmail.com" >
          Email
        </CNavLink>
      </CNavItem>

      <CNavItem>
        <CNavLink href="tel:360-325-7623">Call Now <br />+1.00000000000.
        </CNavLink>
      </CNavItem> */}
      

    </CNav>
    
    <div className="table" style={{ width: "100%", padding: "20px" }}>
        <div class="row">
          {items.map((elem) => {
            const { id, name, imgSrc, WoodType, Dimension, price, size } = elem;
            return (
              <>
                {/* <span id="card"> */}


                <CCard className="ab"
                  key={id}
                  style={{ width: "18rem", marginBottom: "10px" , itemAlign: "center" }}
                >
                  <CCardText className="card-da-mukabla">ID: {id}</CCardText>
                  <CCardImage className="card-da-mukabla-da-image"
                    orientation="top"
                    src={imgSrc}
                    width={200}
                    height={200}
                    style={{ padding: "20px" }} />
                  <CCardBody>

                    <CCardTitle className="card-da-mukabla-da-title">{name} {WoodType}</CCardTitle>
                    <CCardText className="EXCUSES">{size} </CCardText>

                  </CCardBody>
                </CCard>

                {/* </span> */}

              </>

            );
          })}
        </div>
      </div>
      
    </div>
  );
}
export default Furnitur;
