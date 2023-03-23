import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { searchProduct } from '../../../../api';
import { useDebounce } from '../../../../hooks';
import { useCartStore } from '../../../Store';
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

  const { length } = useCartStore();
  console.log(length);
  return (
    <div>
      <div className="flex justify-end">
        <div className="static screens-520:relative  text-[18px] py-[15px] px-[5px] screens-375:px-3  screens-375:pt-5 screens-375:pb-[15px] text-black">
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

        <div className=" text-[18px] py-[15px] px-[5px] screens-375:px-3 screens-375:pt-5 screens-375:pb-[15px] text-black ">
          <Popup
            trigger={
              <button>
                {" "}
                <i className="la la-user transition-main hover:text-main text-[26px] "></i>
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
              background: '#fff'
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

        <Link to='/cart' className=" text-[18px] py-[15px] px-[5px] screens-375:px-3 screens-375:pt-5 screens-375:pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
          <p className=" relative  ">
            <button className="la la-shopping-cart transition-main hover:text-main  fa-cart-shopping text-[26px]"></button>
            <span className="mini-cart-number screen-567:block hidden">
              {length()}
            </span>
          </p>
          <Cart />
        </Link>

        <div className=" text-[18px] py-[15px] px-[5px] screens-375:px-3 screens-375:pt-5 screens-375:pb-[15px]  text-black">
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="la la-bars transition-main hover:text-main cursor-pointer text-[26px]"
          ></button>

          {/* sidebar header */}
          <Sidebar openSidebar={openSidebar} onOpenSidebar={setOpenSidebar} />
        </div>
      </div>
    </div>
  )
}

export default Action