// package com.demo.notification.controller;

// import com.demo.notification.entity.Store;
// import com.demo.notification.service.StoreService;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/stores")
// @CrossOrigin("*")
// public class StoreController {

//     private final StoreService storeService;

//     public StoreController(
//             StoreService storeService
//     ) {
//         this.storeService = storeService;
//     }

//     @GetMapping
//     public List<Store> getAllStores() {
//         return storeService.getAllStores();
//     }

//     @PostMapping
//     public Store createStore(
//             @RequestBody Store store
//     ) {
//         return storeService.saveStore(store);
//     }

//     @DeleteMapping("/{id}")
//     public String deleteStore(
//             @PathVariable Long id
//     ) {

//         storeService.deleteStore(id);

//         return "Store Deleted Successfully";
//     }
// }
package com.demo.notification.controller;

import com.demo.notification.entity.Store;
import com.demo.notification.service.StoreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
@CrossOrigin("*")
public class StoreController {

    private final StoreService storeService;

    public StoreController(
            StoreService storeService
    ) {
        this.storeService = storeService;
    }

    @GetMapping
    public List<Store> getAllStores() {
        return storeService.getAllStores();
    }

    @GetMapping("/{id}")
    public Store getStoreById(
            @PathVariable Long id
    ) {
        return storeService.getStoreById(id);
    }

    @PostMapping
    public Store createStore(
            @RequestBody Store store
    ) {
        return storeService.saveStore(store);
    }

    @PutMapping("/{id}")
    public Store updateStore(
            @PathVariable Long id,
            @RequestBody Store store
    ) {
        return storeService.updateStore(id, store);
    }

    @DeleteMapping("/{id}")
    public String deleteStore(
            @PathVariable Long id
    ) {

        storeService.deleteStore(id);

        return "Store Deleted Successfully";
    }
}