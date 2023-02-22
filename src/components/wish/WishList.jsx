import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../../utils/Store';
import WishListItem from './WishListItem';

const WishList = () => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish: { wishItems } } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'REMOVE_FROM_WISH',
      payload: item,
    });
    toast.success('¡.Has Eliminado Con Éxito El Producto De La Lista De Deseos.!');
  }

  return (
    <div className='w-container'>
      <div className="npc-row">
        <h2 className="npc-title">
          <i class="fa-solid fa-heart"></i> LISTA DE DESEOS.
        </h2>
        <hr className="mb-5" />
      </div>
      <div className="w-row">
        {
          wishItems.length === 0 ? (
            <h4 className='no-products'>
              ¡.NO Has Añadido Ningún Producto A La Lista De Deseos.!
            </h4>
          ) : (
            <div className="w-groups">
              {wishItems.map((item) => (
                <WishListItem key={item._id} item={item} removeItemHandler={removeItemHandler} />
              ))}

            </div>
          )
        }
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default WishList;