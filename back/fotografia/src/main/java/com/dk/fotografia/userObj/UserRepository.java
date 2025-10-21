package com.dk.fotografia.userObj;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> 
{
    Optional<UserModel> findByUsername(String username);
    boolean existsByUsername(String username);    

    // @Query(value = """
    //     SELECT * FROM user
    //     WHERE email = :email
    //     """, nativeQuery = true)
    // Optional<UserModel> findByEmail(@Param("email") String email);
}