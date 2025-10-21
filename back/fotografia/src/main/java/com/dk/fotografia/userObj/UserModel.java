package com.dk.fotografia.userObj;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.dk.fotografia.roleObj.RoleModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(
    name = "user", 
    uniqueConstraints = {
        @UniqueConstraint(
            columnNames = {"username"}
        )
    })

public class UserModel implements UserDetails
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "first_name", nullable = false, length = 80)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 64)
    private String lastName;

    @Column(name = "username", nullable = false, unique = true, length = 100)
    private String username;

    @Column(name = "`password`", nullable = false, length = 64)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "`role`", nullable = false)
    private RoleModel role; 

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() 
    {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }
}