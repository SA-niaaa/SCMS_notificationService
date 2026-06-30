// package com.demo.notification.service;

// import com.demo.notification.entity.Store;
// import com.demo.notification.repository.StoreRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class StoreService {

//     private final StoreRepository storeRepository;

//     public StoreService(
//             StoreRepository storeRepository
//     ) {
//         this.storeRepository = storeRepository;
//     }

//     public List<Store> getAllStores() {
//         return storeRepository.findAll();
//     }

//     public Store saveStore(
//             Store store
//     ) {
//         return storeRepository.save(store);
//     }

//     public void deleteStore(
//             Long id
//     ) {
//         storeRepository.deleteById(id);
//     }
// }

package com.demo.notification.service;

import com.demo.notification.entity.Store;
import com.demo.notification.repository.StoreRepository;
import org.springframework.stereotype.Service;
import com.demo.notification.entity.Store;

import java.sql.Timestamp;
import java.util.List;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    public Store getStoreById(Long id) {
        return storeRepository.findById(id).orElse(null);
    }

    public Store saveStore(Store store) {

        if (store.getStatus() == null) {
            store.setStatus("ACTIVE");
        }

        Timestamp now = new Timestamp(System.currentTimeMillis());

        store.setCreatedAt(now);
        store.setUpdatedAt(now);

        return storeRepository.save(store);
    }

    public Store updateStore(Long id, Store updatedStore) {

        Store store = storeRepository.findById(id).orElse(null);

        if (store == null) {
            return null;
        }

        store.setStoreCode(updatedStore.getStoreCode());
        store.setStoreName(updatedStore.getStoreName());
        store.setLocation(updatedStore.getLocation());
        store.setStoreType(updatedStore.getStoreType());
        store.setManagerName(updatedStore.getManagerName());
        store.setContactNumber(updatedStore.getContactNumber());
        store.setEmail(updatedStore.getEmail());
        store.setStatus(updatedStore.getStatus());

        store.setUpdatedAt(
                new Timestamp(System.currentTimeMillis())
        );

        return storeRepository.save(store);
    }

    public void deleteStore(Long id) {
        storeRepository.deleteById(id);
    }
}