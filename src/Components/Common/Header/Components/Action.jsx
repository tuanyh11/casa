import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react'
import Popup from 'reactjs-popup';
import { searchProduct } from '../../../../api';
import { useDebounce } from '../../../../hooks';
import LoginForm from '../../../Ui/Form/LoginForm';
import CardlistSmall from '../../../Ui/Product/CardlistSmallV1';
import Cart from './Cart';
import Search from './Search';
import Sidebar from './Sidebar';

const Action = () => {


    const [openSearch, setOpenSearch] = useState(false);

    const [text, setText] = useState(null);
  
    const [openSidebar, setOpenSidebar] = useState(false);
  
    const { value: debounceValue, isDebounced } = useDebounce(text, 3000);
  
    const { data, isFetching } = useQuery({
      queryKey: ["search-product", debounceValue],
      queryFn: () => searchProduct(debounceValue),
      refetchOnWindowFocus: false,
      enabled: Boolean(debounceValue),
    });
  
    const listProduct = useMemo(() => {
      return data?.map((item) => {
        return <CardlistSmall key={item.id} {...item} />;
      });
    }, [data]);

  return (
    <div>
        <div className="flex justify-end">
              <div className="static screens-520:relative  text-[18px] px-4 pt-5 pb-[15px] text-black">
                <Search
                  onOpenSearch={setOpenSearch}
                  onTextSearch={setText}
                  isFetching={isFetching}
                  isDebounced={isDebounced}
                  isOpenSearch={openSearch}
                  data={data}
                  textSearch={text}
                  listProduct={listProduct}
                />
              </div>

              <div className=" text-[18px] px-4 pt-5 pb-[15px] text-black ">
                <Popup
                  trigger={
                    <button>
                      {" "}
                      <i className="fa-light transition-main hover:text-main  fa-user"></i>
                    </button>
                  }
                  position="center center"
                  contentStyle={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    top: 50,
                    position: "fixed",
                    zIndex: 999999999999999,
                  }}
                  arrow={false}
                  overlayStyle={{
                    background: "rgba(0, 0, 0, 0.3)",
                    zIndex: 99999999999999,
                  }}
                >
                  {(close) => <LoginForm onClose={close} />}
                </Popup>
              </div>

              <div className=" text-[18px] px-4 pt-5 pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
                <p className=" relative  ">
                  <button className="fa-light transition-main hover:text-main  fa-cart-shopping"></button>
                  <span className="mini-cart-number screen-567:block hidden">
                    1
                  </span>
                </p>
                <Cart/>
              </div>

              <div className=" text-[18px] px-4 pt-5 pb-[15px]  text-black">
                <button
                  onClick={() => setOpenSidebar(!openSidebar)}
                  className="fa-regular fa-bars transition-main hover:text-main cursor-pointer"
                ></button>

                {/* sidebar header */}
                  <Sidebar openSidebar={openSidebar} onOpenSidebar={setOpenSidebar}/>
              </div>
            </div>
    </div>
  )
}

export default Action