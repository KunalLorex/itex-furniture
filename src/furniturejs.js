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
          marginTop: "20px",
          paddingLeft: "10px",
          cursor: "pointer",
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

        <CNavLink
          onClick={() => filterSubCat("DOUBLE BED") & setActiveKey(6)}
          active={activeKey === 6}
        >
          <img className="products" src="https://freepngimg.com/download/aquarium/47401-9-sleigh-bed-picture-png-file-hd.png" height="30" width="30" alt="Logo" /><br />
          Double Bed<br />
        </CNavLink>
        <CNavLink
          onClick={() => filterSubCat("CHAIR") & setActiveKey(7)}
          active={activeKey === 7}
        >
          <img className="products" src="data:image/jpeg;base64,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" height="30" width="30" /> <br/>

          Chair
        </CNavLink>
        <CNavLink
          onClick={() => filterSubCat("DINING TABLE") & setActiveKey(8)}
          active={activeKey === 8}
        >
          <img className="products" src="https://freepngimg.com/thumb/dining_table/4-2-dining-table-transparent.png" height="30" width="30" alt="Logo" /><br />

          Dining Table
        </CNavLink>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("WORK FROM HOME") & setActiveKey(9)}
            active={activeKey === 9}
          >
            <img className="products" src="https://p.kindpng.com/picc/s/313-3134582_study-table-top-view-png-transparent-png.png" height="30" width="30" alt="Logo" /><br />

            TABLE
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("clock") & setActiveKey(5)}
            active={activeKey === 5}
          >
            <img className="products" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuE-GJL0A0lpxt5KAz5ARBqmVvc8aH4sLgIA&usqp=CAU" height="30" width="30" /> <br />
            Wall Clock
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("vase") & setActiveKey(10)}
            active={activeKey === 10}
          >
            <img className="products" src="https://www.ubuy.com.bh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFiRUlkTHJjTUwuX0FDX1NMMTQwMF8uanBn.jpg" height="30" width="30" /> <br />
            Flower Pot
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("marble") & setActiveKey(11)}
            active={activeKey === 11}
          >
            <img className="products" src="https://n2.sdlcdn.com/imgs/i/0/7/Chitrahandicraft-Marble-Table-Vase-9-SDL394471659-1-0a899.png" height="30" width="30" /> <br />
            Marble
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("fountain") & setActiveKey(12)}
            active={activeKey === 12}
          >
            <img className="products" src="https://www.backyardxscapes.com/wp-content/uploads/2020/12/als-garden-art-thumbnail-224x300.png" height="30" width="30" /> <br />
            Fountain
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("temple") & setActiveKey(13)}
            active={activeKey === 13}
          >
            <img className="products" src="https://prayeveryday.in/wp-content/uploads/2020/06/sm11-250x250.png" height="30" width="30" /> <br />
            Temple
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => setItems(data) & setActiveKey(0)}
            active={activeKey === 0}
          >
            <br />
            All
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
        <CNavLink href="#">
          Email
        </CNavLink>
      </CNavItem>

      <CNavItem>
        <CNavLink href="tel:360-325-7623">Call Now <br />+1.00000000000.
        </CNavLink>
      </CNavItem>
    </CNav><div className="table" style={{ width: "100%", padding: "20px" }}>
        <div class="row">
          {items.map((elem) => {
            const { id, name, imgSrc, WoodType, Dimension, price, size } = elem;
            return (
              <>
                {/* <span id="card"> */}


                <CCard className="ab"
                  key={id}
                  style={{ width: "18rem", marginBottom: "10px" }}
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
